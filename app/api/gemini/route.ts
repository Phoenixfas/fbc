import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    // const model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
    // const originalApiUrl = process.env.GEMINI_API_URL ?? "";

    const requestData = {
      system_instruction: body.system_instruction,
      contents: body.contents,
    };

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      console.error("[api/gemini] upstream error", {
        status: resp.status,
        body: text?.slice?.(0, 2000),
      });
      return NextResponse.json(
        { error: text, status: resp.status },
        { status: resp.status }
      );
    }

    const data = await resp.json();

    // Extract reply using common response shapes from Google Generative Language
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.candidates?.[0]?.text ||
      data.output?.[0]?.content?.[0]?.text ||
      data.reply ||
      data.choices?.[0]?.message?.content ||
      data.output_text ||
      data.text ||
      JSON.stringify(data);

    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message ?? err) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      route: "/api/gemini",
      note: "POST to this route to proxy to Gemini.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message ?? err) },
      { status: 500 }
    );
  }
}
