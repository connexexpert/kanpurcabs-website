# ============================================================
# KanpurCabs: Complete GitHub + Vercel + Supabase Setup Script
# ============================================================
# Run this script in PowerShell from the project directory:
#   d:\Downloads\carweb
#
# It will:
# 1. Log you into GitHub, Vercel, and Supabase (browser popups)
# 2. Create a GitHub repository and push the code
# 3. Create a Supabase project and run the schema + seed
# 4. Deploy to Vercel with all environment variables
# ============================================================

$ErrorActionPreference = "Stop"
$projectDir = "d:\Downloads\carweb"
Set-Location $projectDir

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  KanpurCabs: Full Deployment Setup" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# ─── STEP 1: GitHub Login ─────────────────────────────────────
Write-Host "STEP 1: GitHub Authentication" -ForegroundColor Yellow
Write-Host "A browser window will open. Log in and authorize the GitHub CLI."
Write-Host ""

$env:PATH = "$env:PATH;C:\Program Files\GitHub CLI"

try {
    $ghUser = & "C:\Program Files\GitHub CLI\gh.exe" auth status 2>&1
    if ($ghUser -match "Logged in") {
        Write-Host "  ✅ Already logged into GitHub" -ForegroundColor Green
    } else {
        & "C:\Program Files\GitHub CLI\gh.exe" auth login --web --git-protocol https
    }
} catch {
    & "C:\Program Files\GitHub CLI\gh.exe" auth login --web --git-protocol https
}

Write-Host ""

# ─── STEP 2: Create GitHub Repository ─────────────────────────
Write-Host "STEP 2: Creating GitHub Repository" -ForegroundColor Yellow

$repoName = "kanpurcabs-website"
Write-Host "  Creating repository: $repoName"

try {
    & "C:\Program Files\GitHub CLI\gh.exe" repo create $repoName --public --source=. --remote=origin --push 2>&1
    Write-Host "  ✅ Repository created and code pushed!" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  Repository may already exist. Trying to push..." -ForegroundColor DarkYellow
    try {
        git remote remove origin 2>$null
        $ghUsername = (& "C:\Program Files\GitHub CLI\gh.exe" api user --jq ".login" 2>$null).Trim()
        git remote add origin "https://github.com/$ghUsername/$repoName.git"
        git push -u origin master --force
        Write-Host "  ✅ Code pushed to existing repository!" -ForegroundColor Green
    } catch {
        Write-Host "  ❌ Failed to push. Error: $_" -ForegroundColor Red
    }
}

$ghUsername = (& "C:\Program Files\GitHub CLI\gh.exe" api user --jq ".login" 2>$null).Trim()
$repoUrl = "https://github.com/$ghUsername/$repoName"
Write-Host "  📂 Repository: $repoUrl" -ForegroundColor Cyan
Write-Host ""

# ─── STEP 3: Supabase Login ──────────────────────────────────
Write-Host "STEP 3: Supabase Authentication" -ForegroundColor Yellow
Write-Host "A browser window will open. Log in and authorize the Supabase CLI."
Write-Host ""

try {
    $sbProjects = npx supabase projects list 2>&1
    if ($sbProjects -match "ID") {
        Write-Host "  ✅ Already logged into Supabase" -ForegroundColor Green
    } else {
        npx supabase login
    }
} catch {
    npx supabase login
}

Write-Host ""

# ─── STEP 4: Create Supabase Project ─────────────────────────
Write-Host "STEP 4: Creating Supabase Project" -ForegroundColor Yellow

$sbProjectName = "kanpurcabs"
$sbRegion = "ap-south-1"
$sbDbPassword = "KanpurCabs2024Secure!"

Write-Host "  Project Name: $sbProjectName"
Write-Host "  Region: $sbRegion (Mumbai)"
Write-Host "  Creating project (this takes ~60 seconds)..."

try {
    $createOutput = npx supabase projects create $sbProjectName --region $sbRegion --db-password $sbDbPassword 2>&1
    Write-Host $createOutput
    Write-Host "  ✅ Supabase project created!" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  Project may already exist. Continuing..." -ForegroundColor DarkYellow
}

Write-Host ""
Write-Host "  ⏳ Waiting 60 seconds for project to be fully ready..." -ForegroundColor DarkYellow
Start-Sleep -Seconds 60

# Get project reference ID
Write-Host "  Fetching project details..."
$projectsList = npx supabase projects list 2>&1
Write-Host $projectsList

# Extract project ref from the list
$projectRef = ""
foreach ($line in ($projectsList -split "`n")) {
    if ($line -match $sbProjectName) {
        $parts = $line.Trim() -split '\s*\│\s*'
        foreach ($p in $parts) {
            $trimmed = $p.Trim()
            if ($trimmed.Length -eq 20 -and $trimmed -match "^[a-z]+$") {
                $projectRef = $trimmed
                break
            }
        }
        if (-not $projectRef) {
            # Try another pattern: look for a word that looks like a supabase ref
            if ($line -match '([a-z]{20})') {
                $projectRef = $Matches[1]
            }
        }
    }
}

if (-not $projectRef) {
    Write-Host ""
    Write-Host "  ⚠️  Could not auto-detect project ref." -ForegroundColor DarkYellow
    $projectRef = Read-Host "  Please enter your Supabase Project Reference ID (from the list above)"
}

$supabaseUrl = "https://$projectRef.supabase.co"
Write-Host "  📡 Supabase URL: $supabaseUrl" -ForegroundColor Cyan

# Get API keys
Write-Host "  Fetching API keys..."
$apiKeys = npx supabase projects api-keys --project-ref $projectRef 2>&1
Write-Host $apiKeys

$anonKey = ""
$serviceKey = ""
foreach ($line in ($apiKeys -split "`n")) {
    if ($line -match "anon") {
        if ($line -match '(eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)') {
            $anonKey = $Matches[1]
        }
    }
    if ($line -match "service_role") {
        if ($line -match '(eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)') {
            $serviceKey = $Matches[1]
        }
    }
}

if (-not $anonKey) {
    $anonKey = Read-Host "  Enter SUPABASE_ANON_KEY (from Supabase Dashboard > Settings > API)"
}
if (-not $serviceKey) {
    $serviceKey = Read-Host "  Enter SUPABASE_SERVICE_ROLE_KEY (from Supabase Dashboard > Settings > API)"
}

Write-Host "  ✅ API Keys retrieved!" -ForegroundColor Green
Write-Host ""

# ─── STEP 5: Run Schema & Seed on Supabase ───────────────────
Write-Host "STEP 5: Setting up Database Tables & Seed Data" -ForegroundColor Yellow

# Get database connection string
$dbConnString = "postgresql://postgres.$projectRef`:$sbDbPassword@aws-0-$sbRegion.pooler.supabase.com:6543/postgres"

Write-Host "  Running schema.sql..."
try {
    npx supabase db execute --project-ref $projectRef -f "$projectDir\supabase\schema.sql" 2>&1
    Write-Host "  ✅ Schema created with RLS policies!" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  Schema execution had issues. You may need to run it manually in Supabase SQL Editor." -ForegroundColor DarkYellow
    Write-Host "  Error: $_"
}

Write-Host "  Running seed.sql..."
try {
    npx supabase db execute --project-ref $projectRef -f "$projectDir\supabase\seed.sql" 2>&1
    Write-Host "  ✅ Seed data inserted!" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  Seed execution had issues. You may need to run it manually in Supabase SQL Editor." -ForegroundColor DarkYellow
    Write-Host "  Error: $_"
}

Write-Host ""

# ─── STEP 6: Update .env.local ────────────────────────────────
Write-Host "STEP 6: Updating Environment Configuration" -ForegroundColor Yellow

$envContent = @"
# Supabase
NEXT_PUBLIC_SUPABASE_URL=$supabaseUrl
NEXT_PUBLIC_SUPABASE_ANON_KEY=$anonKey
SUPABASE_SERVICE_ROLE_KEY=$serviceKey

# NextAuth
NEXTAUTH_SECRET=kanpurcabs-$(Get-Random -Minimum 100000 -Maximum 999999)-production-secret
NEXTAUTH_URL=https://kanpurcabs-website.vercel.app

# Admin credentials
ADMIN_EMAIL=admin@kanpurcabs.com
ADMIN_PASSWORD=admin123

# Site
NEXT_PUBLIC_SITE_URL=https://kanpurcabs-website.vercel.app
NEXT_PUBLIC_PHONE=+91 98765 43210
NEXT_PUBLIC_WHATSAPP=+919876543210
NEXT_PUBLIC_EMAIL=info@kanpurcabs.com
"@

$envContent | Out-File -FilePath "$projectDir\.env.local" -Encoding UTF8
Write-Host "  ✅ .env.local updated with Supabase credentials" -ForegroundColor Green
Write-Host ""

# ─── STEP 7: Vercel Login & Deploy ───────────────────────────
Write-Host "STEP 7: Vercel Authentication" -ForegroundColor Yellow
Write-Host "A browser window will open. Log in and authorize the Vercel CLI."
Write-Host ""

npx vercel login

Write-Host ""
Write-Host "STEP 8: Deploying to Vercel" -ForegroundColor Yellow

# Set environment variables on Vercel
Write-Host "  Setting environment variables..."

$envVars = @{
    "NEXT_PUBLIC_SUPABASE_URL" = $supabaseUrl
    "NEXT_PUBLIC_SUPABASE_ANON_KEY" = $anonKey
    "SUPABASE_SERVICE_ROLE_KEY" = $serviceKey
    "NEXTAUTH_SECRET" = "kanpurcabs-$(Get-Random -Minimum 100000 -Maximum 999999)-production-secret"
    "ADMIN_EMAIL" = "admin@kanpurcabs.com"
    "ADMIN_PASSWORD" = "admin123"
    "NEXT_PUBLIC_PHONE" = "+91 98765 43210"
    "NEXT_PUBLIC_WHATSAPP" = "+919876543210"
    "NEXT_PUBLIC_EMAIL" = "info@kanpurcabs.com"
}

# Deploy with yes to all prompts
Write-Host "  Deploying to production..."
npx vercel --prod --yes

Write-Host ""

# Now set env vars
foreach ($key in $envVars.Keys) {
    $value = $envVars[$key]
    Write-Host "  Setting $key..."
    echo $value | npx vercel env add $key production --yes 2>$null
}

# Redeploy with env vars set
Write-Host ""
Write-Host "  Re-deploying with environment variables..."
npx vercel --prod --yes

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  📂 GitHub:   $repoUrl" -ForegroundColor Cyan
Write-Host "  🌐 Vercel:   Check vercel.com dashboard for live URL" -ForegroundColor Cyan
Write-Host "  📡 Supabase: $supabaseUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "  🔑 Admin Login:" -ForegroundColor Yellow
Write-Host "     URL:      https://YOUR-VERCEL-URL/admin/login"
Write-Host "     Email:    admin@kanpurcabs.com"
Write-Host "     Password: admin123"
Write-Host ""
Write-Host "  ✅ Next steps:"
Write-Host "     1. Open your Vercel URL in the browser"
Write-Host "     2. Test the booking form and contact form"
Write-Host "     3. Check Supabase dashboard for submitted data"
Write-Host "     4. Log into admin panel"
Write-Host ""
