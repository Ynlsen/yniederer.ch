import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const url = process.env.DISCORD_WEBHOOK_URL;

  if(!url){
    return NextResponse.json(
      { success: false, error: 'Webhook not configured' }, 
      { status: 500 }
    );
  }
  
  try{  
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: name,
            description: message,
            footer: { text: email }
          },
        ],
      }),
    });
    
    if(res.ok){
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }else{
      return NextResponse.json(
        { success: false, error: 'Discord API error' }, 
        { status: 502 }
      );
    }
  }catch(err){
    return NextResponse.json(
      { success: false, error: 'Discord API error' }, 
      { status: 502 }
    );
  }
}