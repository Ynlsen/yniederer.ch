import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const url = process.env.DISCORD_WEBHOOK_URL;
    
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
}