import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify, createRemoteJWKSet } from 'jose';

const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET environment variable is not set');
    return null;
  }
  return secret;
};

interface JWTPayload extends Record<string, unknown> {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

const verifyJWT = async (token: string): Promise<JWTPayload | null> => {
  try {
    const secret = getJWTSecret();
    if (!secret) return null;
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ['HS256'],
    });
    
    console.log('JWT verification successful, payload:', payload);
    const typedPayload = payload as Record<string, unknown>;
    if (
      typeof typedPayload.userId === 'string' &&
      typeof typedPayload.email === 'string' &&
      typeof typedPayload.role === 'string'
    ) {
      return typedPayload as JWTPayload;
    }
    throw new Error('Invalid token payload structure');
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('Middleware running for path:', pathname);

  if (!pathname.startsWith('/dashboard')) {
    return NextResponse.next();
  }

  try {
    const token = request.cookies.get('token');
    console.log('Token in cookie:', token?.value?.substring(0, 20) + '...');

    if (!token?.value) {
      console.log('No token in cookie');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const decoded = await verifyJWT(token.value);
    console.log('Token verification result:', !!decoded);

    if (!decoded || decoded.role !== 'admin') {
      console.log('Not admin or invalid token, role:', decoded?.role);
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      response.cookies.delete('user');
      return response;
    }

    console.log('Admin access granted for user:', decoded.email);
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    response.cookies.delete('user');
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
