import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages, system } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "ANTHROPIC_API_KEY not configured on server" });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: system || "You are Robo, a friendly coding tutor for kids.",
      messages,
    });

    return res.status(200).json({ reply: response.content[0].text });
  } catch (error) {
    console.error("Anthropic API error:", error);
    return res.status(500).json({ error: "AI service error: " + error.message });
  }
}
