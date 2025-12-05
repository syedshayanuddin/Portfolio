const llmService = require('../services/llmService');

async function chatHandler(req, res) {
  try {
    const { messages } = req.body;

    if (!messages) {
      return res.status(400).json({ error: "messages array required" });
    }

    const reply = await llmService.chat(messages);

    return res.json({ reply });

  } catch (err) {
    console.error("AI Chat Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { chatHandler };
