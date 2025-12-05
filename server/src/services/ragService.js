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

  // Check for project queries
  if (lowerQuery.includes('project') || lowerQuery.includes('built') || lowerQuery.includes('work')) {
    relevantInfo.push(`Projects:\n${JSON.stringify(knowledge.projects, null, 2)}`);
  }
  
  // Check for skills queries
  if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('know') || lowerQuery.includes('language')) {
    relevantInfo.push(`Skills:\n${JSON.stringify(knowledge.skills, null, 2)}`);
  }
  
  // Check for about/bio queries
  if (lowerQuery.includes('about') || lowerQuery.includes('who') || lowerQuery.includes('background') || lowerQuery.includes('shayan')) {
    relevantInfo.push(`About:\n${JSON.stringify(knowledge.about, null, 2)}`);
  }

  // Check for experience queries
  if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
    relevantInfo.push(`Experience:\n${JSON.stringify(knowledge.experience, null, 2)}`);
  }

  // If no specific match, return general info
  if (relevantInfo.length === 0) {
    relevantInfo.push(`General Info:\n${JSON.stringify(knowledge.about, null, 2)}`);
  }
  
  return relevantInfo.join('\n\n');
}

module.exports = { searchKnowledge };
