-- ================================================================
-- KanpurCabs: Supabase Database Schema with Row Level Security (RLS)
-- ================================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CARS TABLE
CREATE TABLE IF NOT EXISTS public.cars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('hatchback', 'sedan', 'suv', 'luxury', 'tempo_traveller')),
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER,
  seats INTEGER DEFAULT 4,
  doors INTEGER DEFAULT 4,
  luggage INTEGER DEFAULT 2,
  transmission TEXT DEFAULT 'manual',
  fuel_type TEXT DEFAULT 'petrol',
  ac BOOLEAN DEFAULT true,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  price_per_km NUMERIC(10,2) DEFAULT 0,
  price_per_day NUMERIC(10,2) DEFAULT 0,
  price_per_hour NUMERIC(10,2) DEFAULT 0,
  minimum_charge NUMERIC(10,2) DEFAULT 0,
  driver_allowance NUMERIC(10,2) DEFAULT 300,
  night_charge NUMERIC(10,2) DEFAULT 250,
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  content TEXT,
  icon TEXT,
  image TEXT,
  features TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TOUR PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.tour_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  content TEXT,
  duration TEXT NOT NULL,
  distance TEXT,
  destinations TEXT[] DEFAULT '{}',
  highlights TEXT[] DEFAULT '{}',
  itinerary TEXT,
  price NUMERIC(10,2) DEFAULT 0,
  price_label TEXT,
  inclusions TEXT[] DEFAULT '{}',
  exclusions TEXT[] DEFAULT '{}',
  image TEXT,
  gallery TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. OUTSTATION DESTINATIONS TABLE
CREATE TABLE IF NOT EXISTS public.destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  distance TEXT NOT NULL,
  distance_km NUMERIC(10,2) DEFAULT 0,
  duration TEXT NOT NULL,
  image TEXT,
  highlights TEXT[] DEFAULT '{}',
  hatchback_price NUMERIC(10,2) DEFAULT 0,
  sedan_price NUMERIC(10,2) DEFAULT 0,
  suv_price NUMERIC(10,2) DEFAULT 0,
  tempo_price NUMERIC(10,2) DEFAULT 0,
  route_via TEXT,
  toll_info TEXT,
  best_time TEXT,
  is_popular BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. BOOKINGS / ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  pickup_location TEXT NOT NULL,
  drop_location TEXT,
  travel_date TIMESTAMPTZ NOT NULL,
  return_date TIMESTAMPTZ,
  pickup_time TEXT,
  trip_type TEXT DEFAULT 'one_way',
  service_type TEXT NOT NULL,
  vehicle_type TEXT,
  passengers INTEGER DEFAULT 1,
  requirements TEXT,
  package_duration TEXT,
  source_page TEXT,
  source_section TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  admin_notes TEXT,
  car_id UUID REFERENCES public.cars(id) ON DELETE SET NULL,
  tour_package_id UUID REFERENCES public.tour_packages(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  avatar TEXT,
  service TEXT,
  is_approved BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. FAQS TABLE
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. BANNERS TABLE
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  subtitle TEXT,
  image TEXT NOT NULL,
  cta_text TEXT,
  cta_link TEXT,
  page TEXT DEFAULT 'home',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ================================================================

ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Policies (for website visitors)
CREATE POLICY "Public can view available cars" ON public.cars
  FOR SELECT USING (is_available = true);

CREATE POLICY "Public can view active services" ON public.services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active tour packages" ON public.tour_packages
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active destinations" ON public.destinations
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view approved testimonials" ON public.testimonials
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Public can view active FAQs" ON public.faqs
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active banners" ON public.banners
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view site settings" ON public.site_settings
  FOR SELECT USING (true);

-- 2. Public Insert Policies (for enquiry and booking forms)
CREATE POLICY "Public can submit booking enquiries" ON public.bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can submit contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- 3. Service Role & Authenticated Admin Full Access Policies
CREATE POLICY "Service role full access on cars" ON public.cars
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on services" ON public.services
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on tour_packages" ON public.tour_packages
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on destinations" ON public.destinations
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on bookings" ON public.bookings
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on testimonials" ON public.testimonials
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on faqs" ON public.faqs
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on banners" ON public.banners
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on site_settings" ON public.site_settings
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access on contact_messages" ON public.contact_messages
  FOR ALL USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');
