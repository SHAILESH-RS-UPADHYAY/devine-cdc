import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { success: true, message: "Server is warm and ready!" },
    { status: 200 }
  );
}
