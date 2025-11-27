import { NextResponse } from "next/server";

type IncomingMsg = { role?: string; content?: string; text?: string };

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, system } = body || {};

    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
    const originalApiUrl = process.env.GEMINI_API_URL ?? "";
    let apiUrl = originalApiUrl;

    if (!originalApiUrl) {
      // If no custom URL provided, use Google Generative Language endpoint and pass key as query param
      if (!apiKey) {
        return NextResponse.json(
          { error: "Server not configured. Set GEMINI_API_KEY." },
          { status: 500 }
        );
      }
      apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    } else {
      // Detect and auto-correct common misconfigurations where the user set an incomplete or wrong URL
      try {
        const u = new URL(originalApiUrl);

        // If the host is the wrong gemini.googleapis.com, rewrite to the Generative Language host
        if (u.hostname.includes("gemini.googleapis.com")) {
          const keySuffix = apiKey ? `?key=${apiKey}` : "";
          apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent${keySuffix}`;

          // If user already targeted generativelanguage host but didn't include :generateContent, append it
        } else if (
          u.hostname.includes("generativelanguage.googleapis.com") &&
          u.pathname.includes("/v1/models/") &&
          !originalApiUrl.includes(":generateContent")
        ) {
          const base = originalApiUrl.replace(/\/?$/, "");
          const sep = base.includes("?") ? "&" : "?";
          const keyParam =
            originalApiUrl.includes("key=") || !apiKey
              ? ""
              : `${sep}key=${apiKey}`;
          apiUrl = `${base}/${model}:generateContent${keyParam}`;

          // If the path is the generic /v1/models base, append model/action and key if needed
        } else if (
          u.pathname.endsWith("/v1/models") ||
          u.pathname.endsWith("/v1/models/")
        ) {
          const base = originalApiUrl.replace(/\/?$/, "");
          const needsKey = !originalApiUrl.includes("key=") && Boolean(apiKey);
          const keySuffix = needsKey ? `?key=${apiKey}` : "";
          apiUrl = `${base}/${model}:generateContent${keySuffix}`;
        } else {
          // leave provided URL as-is (it might already be correct)
          apiUrl = originalApiUrl;
        }
      } catch (e) {
        // not a valid URL, leave as provided
        apiUrl = originalApiUrl;
      }
    }

    console.log("[api/gemini] originalApiUrl:", originalApiUrl);
    console.log("[api/gemini] resolved apiUrl:", apiUrl);

    // Convert incoming messages to the shape expected by the Gemini (Generative Language) API
    const contents = (messages || []).map((m: IncomingMsg) => {
      const role = (m.role || "user").toLowerCase();
      const text = m.content ?? m.text ?? "";
      // The Generative Language API expects roles like 'user' or 'system' or 'assistant/model'.
      // In examples your code uses 'model' for the assistant replies; map 'assistant' -> 'model'.
      const mappedRole = role === "assistant" ? "model" : role;
      return { role: mappedRole, parts: [{ text }] };
    });

    const requestData = {
      system_instruction: { parts: [{ text: system ?? "" }] },
      contents,
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    // Use x-goog-api-key header when available (some Google endpoints accept it)
    if (apiKey) headers["x-goog-api-key"] = apiKey;
    // If the provided URL is custom (originalApiUrl) and we want bearer auth instead, uncomment below
    // if (originalApiUrl && apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

    const resp = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(requestData),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("[api/gemini] upstream error", {
        status: resp.status,
        url: apiUrl,
        body: text?.slice?.(0, 2000),
      });
      return NextResponse.json(
        { error: text, upstreamUrl: apiUrl, status: resp.status },
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
