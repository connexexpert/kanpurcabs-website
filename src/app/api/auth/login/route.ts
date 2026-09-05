import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Hardcoded credentials for now
    if (email === 'admin@kanpurcabs.com' && password === 'admin123') {
      const user = { email, role: 'admin' };
      // Simple pseudo-token
      const token = Buffer.from(JSON.stringify({ ...user, exp: Date.now() + 86400000 })).toString('base64');
      
      return NextResponse.json({ success: true, token, user });
    }

    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
