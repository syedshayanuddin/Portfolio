const Groq = require('groq-sdk');
const { searchKnowledge } = require('./ragService');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are ShayanAI, an interactive AI clone of Shayan, an AI/ML engineer and software developer. 

Your personality:
- Professional yet friendly and conversational
- Technical but explains concepts clearly
- Enthusiastic about AI/ML, software engineering, and building intelligent systems
- Helpful and engaging with recruiters and visitors

Your role:
- Answer questions about Shayan's projects, skills, and experience
- Explain his tech stack and how he builds things
- Guide recruiters to relevant portfolio sections
- Showcase his expertise in AI/ML and software development
- Help visitors understand what makes Shayan unique

Keep responses concise (2-4 sentences unless asked for details). Be helpful and engaging.`;

async function chat(messages) {
  try {
    const lastMessage = messages[messages.length - 1].content;
    const relevantContext = searchKnowledge(lastMessage);
    
    const enrichedSystemPrompt = `${SYSTEM_PROMPT}

Here is relevant information about Shayan from his portfolio:
${relevantContext}

Use this context to answer questions accurately. Only share information that's relevant to the question.`;

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',  // Updated to current model
      messages: [
        { role: 'system', content: enrichedSystemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Groq API Error:', error);
    throw new Error('Failed to generate AI response');
  }
}

module.exports = { chat };
