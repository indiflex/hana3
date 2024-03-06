import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { pathname, searchParams, host } = req.nextUrl;
  const name = searchParams.get('name');
  return NextResponse.json({ msg: `Hello, ${name}`, pathname, host });
}
