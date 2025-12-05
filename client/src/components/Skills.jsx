import { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = {
    "AI & Machine Learning": [
      { name: "Machine Learning", level: 90 },
      { name: "Generative AI", level: 85 },
      { name: "NLP", level: 88 },
      { name: "LLM Fine-tuning", level: 82 },
      { name: "RAG Systems", level: 85 },
      { name: "Python (AI/ML)", level: 90 },
    ],
    "Full-Stack Development": [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 82 },
    ],
    "Cloud & APIs": [
      { name: "Oracle Cloud (OCI)", level: 85 },
      { name: "Gemini API", level: 88 },
      { name: "Streamlit", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "REST APIs", level: 85 },
    ],
    "Programming Languages": [
      { name: "Python", level: 92 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 82 },
      { name: "HTML/CSS", level: 88 },
      { name: "Swift", level: 70 },
    ]
  };

  const categories = ['all', ...Object.keys(skills)];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skills).flatMap(([category, skillList]) =>
        skillList.map(skill => ({ ...skill, category }))
      );
    }
    return skills[activeCategory].map(skill => ({ ...skill, category: activeCategory }));
  };

  return (
    <div id="skills" className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white py-16 overflow-y-auto">
      <div className="container mx-auto px-6 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in building AI-powered applications and full-stack solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-purple-300'
              }`}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group hover:border-purple-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{skill.category}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Skill Level Text */}
              <div className="mt-3 text-xs font-semibold text-gray-500 text-right">
                {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-purple-100 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
              24+
            </div>
            <div className="text-gray-600 font-semibold">Technologies</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 font-semibold">Projects</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-pink-100 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-gray-600 font-semibold">Certifications</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-cyan-100 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent mb-2">
              90%+
            </div>
            <div className="text-gray-600 font-semibold">AI/ML Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
