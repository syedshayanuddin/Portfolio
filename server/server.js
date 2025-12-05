import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.use(cors());
app.use(express.json());

// Load knowledge base
let portfolioKnowledge = {};
let projectInfo = {};

try {
  const portfolioPath = join(__dirname, 'data', 'portfolio_knowledge.json');
  const projectPath = join(__dirname, 'data', 'projectInfo.json');
  
  portfolioKnowledge = JSON.parse(fs.readFileSync(portfolioPath, 'utf-8'));
  projectInfo = JSON.parse(fs.readFileSync(projectPath, 'utf-8'));
  
  console.log('✅ Knowledge base loaded successfully');
  console.log(`📊 Loaded ${projectInfo.projects?.length || 0} projects`);
} catch (error) {
  console.error('❌ Error loading knowledge base:', error.message);
}

// Create system prompt with knowledge
function createSystemPrompt() {
  const projects = projectInfo.projects || [];
  const personal = portfolioKnowledge.personal_info || {};
  const education = portfolioKnowledge.education || {};
  const skills = portfolioKnowledge.technical_skills || {};
  const certifications = portfolioKnowledge.certifications || [];

  return `You are ShayanAI, an AI assistant representing Syed Shayan Uddin, an AI/ML Engineer and Full-stack Developer.

PERSONAL INFORMATION:
- Name: ${personal.name || 'Syed Shayan Uddin'}
- Title: ${personal.title || 'AI/ML Engineer & Full-stack Developer'}
- Location: ${personal.location || 'Hyderabad, India'}
- Email: ${personal.email || 'shayanuddinsd@gmail.com'}
- GitHub: ${personal.github || 'https://github.com/syedshayanuddin'}
- LinkedIn: ${personal.linkedin || 'https://www.linkedin.com/in/syed-shayan-uddin-5753a1321'}
- Availability: ${personal.availability || 'Available for AI/ML and Software Development roles'}

BIO:
${personal.bio || 'AI/ML Engineer passionate about building intelligent systems.'}

EDUCATION:
- Degree: ${education.degree || 'B.E. in AI & ML'}
- University: ${education.university || 'MJCET'}
- GPA: ${education.gpa || '8.6/10'}
- Duration: ${education.duration || '2022-Present'}

CERTIFICATIONS:
${certifications.map(cert => `- ${cert.name} (${cert.issuer})`).join('\n')}

TECHNICAL SKILLS:
Programming Languages: ${skills.programming_languages?.join(', ') || 'Python, JavaScript, Java'}
AI/ML: ${skills.ai_ml_frameworks?.join(', ') || 'TensorFlow, PyTorch, Transformers'}
Web Development: ${skills.web_technologies?.frontend?.join(', ') || 'React, TypeScript'} | ${skills.web_technologies?.backend?.join(', ') || 'Node.js, Express'}
Databases: ${skills.web_technologies?.databases?.join(', ') || 'MongoDB, PostgreSQL'}

PROJECTS:
${projects.map(p => `
${p.name} (${p.date}):
- Description: ${p.description}
- Type: ${p.type}
- Tech Stack: ${p.technologies?.join(', ')}
- Key Features: ${p.key_features?.slice(0, 3).join('; ')}
- GitHub: ${p.github || 'Not public yet'}
${p.demo ? `- Demo: ${p.demo}` : ''}
`).join('\n')}

INSTRUCTIONS:
1. Be friendly, professional, and enthusiastic about Shayan's work
2. Provide detailed information about projects when asked
3. For contact info: Only share email (${personal.email}), GitHub, and LinkedIn. NEVER share phone numbers or other personal details
4. If asked about availability: Mention he's open to AI/ML and Software Development roles (Remote/Hybrid/Onsite)
5. Highlight his expertise in AI/ML, LLMs, RAG systems, and full-stack development
6. If you don't know something, be honest and suggest they reach out via email
7. Keep responses concise but informative (2-3 paragraphs max)
8. Use emojis occasionally to keep it friendly 🚀
9. Never make up information - stick to the knowledge base

Remember: You represent Shayan professionally. Be helpful, accurate, and protect his privacy.`;
}

// Chat endpoint
// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    console.log('📩 Received message:', message);

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build conversation with system prompt
    const messages = [
      {
        role: 'system',
        content: createSystemPrompt()
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ];

    console.log('🤖 Calling Groq API...');

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    console.log('✅ Response generated:', reply.substring(0, 100) + '...');

    res.json({ 
      reply,
      success: true 
    });

  } catch (error) {
    console.error('❌ Error in chat endpoint:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: error.message 
    });
  }
});


// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    knowledgeBaseLoaded: Object.keys(portfolioKnowledge).length > 0,
    projectsLoaded: projectInfo.projects?.length || 0
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 Knowledge base status: ${Object.keys(portfolioKnowledge).length > 0 ? '✅ Loaded' : '❌ Not loaded'}`);
  console.log(`🎯 Projects loaded: ${projectInfo.projects?.length || 0}`);
});
