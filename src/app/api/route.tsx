import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const msg = searchParams.get('msg')

  const fetchResponse = await fetch(`https://whatsapp.chat.comunix.tech//3corp/ai/talk?msg=${msg}`, {
    method: "GET",
  })

  const answer = await fetchResponse.text()
      
  return NextResponse.json({ answer })

}