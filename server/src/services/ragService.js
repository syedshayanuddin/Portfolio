const fs = require('fs');
const path = require('path');

let portfolioKnowledge = null;

function loadKnowledge() {
  if (!portfolioKnowledge) {
    const dataPath = path.join(__dirname, '../data/portfolio_knowledge.json');
    portfolioKnowledge = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }
  return portfolioKnowledge;
}

function searchKnowledge(query) {
  const knowledge = loadKnowledge();
  const lowerQuery = query.toLowerCase();
  
  let relevantInfo = [];

  // Always include personal info
  relevantInfo.push(`Personal Info:\n${JSON.stringify(knowledge.personal_info, null, 2)}`);

  if (lowerQuery.includes('project')) {
    relevantInfo.push(`Projects:\n${JSON.stringify(knowledge.projects, null, 2)}`);
  }

  if (lowerQuery.includes('skill') || lowerQuery.includes('tech')) {
    relevantInfo.push(`Skills:\n${JSON.stringify(knowledge.skills, null, 2)}`);
  }

  if (lowerQuery.includes('experience')) {
    relevantInfo.push(`Experience:\n${JSON.stringify(knowledge.experience, null, 2)}`);
  }

  return relevantInfo.join('\n\n');
}

module.exports = { searchKnowledge };
