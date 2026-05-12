import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    return NextResponse.json(completion);
  } catch (error: unknown) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
