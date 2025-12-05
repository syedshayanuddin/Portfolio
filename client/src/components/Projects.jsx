import { useState } from 'react';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      name: "InterviewAIde",
      icon: "",
      image: "/images/interviewaide.png",
      description: "AI-powered interview preparation platform with personalized coaching. Fine-tuned LLM generates tailored questions based on user resumes with real-time feedback.",
      tech_stack: ["AI/ML", "NLP", "Python", "JavaScript", "Machine Learning", "LLM Fine-tuning"],
      highlights: [
        "Fine-tuned open-source LLM for tailored question generation",
        "Resume parsing with JavaScript backend logic",
        "Personalized interview sessions based on user profile",
        "Real-time AI-driven feedback and coaching"
      ],
      type: "AI/ML Project",
      details: "Developed an intelligent interview preparation system that simulates personalized interview sessions. Showcases expertise in NLP, ML, and LLM fine-tuning for domain-specific applications.",
      github: "https://github.com/syedshayanuddin/interviewAIde",
      date: "December 2024"
    },
    {
      name: "NovelFlow",
      icon: "",
      image: "/images/novelflow.png",
      description: "AI-powered Chinese-English novel translation pipeline with cloud-native architecture, RAG system, and automated glossary management for consistent translations.",
      tech_stack: ["Python", "Gemini API", "RAG", "Streamlit", "FAISS", "NLP", "Cloud AI"],
      highlights: [
        "Cloud-native translation using Gemini 2.5 models",
        "RAG-based context retrieval for consistency",
        "Automated glossary extraction and management",
        "Multi-format export (TXT, DOCX, EPUB)"
      ],
      type: "AI/ML Project",
      details: "Built a comprehensive translation system with intelligent chapter splitting, embedding-based context retrieval, entity verification, and polishing pipeline. Features Streamlit UI for easy novel processing.",
      github: "#",
      date: "November 2024"
    },
    {
      name: "Cravory",
      icon: "",
      image: "/images/cravory.png",
      description: "Modern recipe discovery app with ingredient-based search, mood-based recommendations, and surprise recipe generator. Built with React, TypeScript, and TailwindCSS.",
      tech_stack: ["React", "TypeScript", "TailwindCSS", "TheMealDB API", "Vite"],
      highlights: [
        "Ingredient-based search to find recipes",
        "Mood-based discovery (Comfort, Healthy, Spicy, etc.)",
        "Random recipe generator for inspiration",
        "Recipe details with video tutorials"
      ],
      type: "Full-stack Project",
      details: "Interactive recipe companion featuring smooth animations, time-based filtering, favorites system, and API-driven recipe data. Modern UI with seamless user experience.",
      github: "https://github.com/syedshayanuddin/cravoryy",
      demo: "https://cravoryy.vercel.app",
      date: "September 2024"
    },
    {
      name: "College Management System",
      icon: "",
      image: "/images/college-management.png",
      description: "Comprehensive management platform for MJCET to digitize student attendance with dual authentication portals and real-time analytics.",
      tech_stack: ["Node.js", "Express.js", "EJS", "MongoDB", "Backend API", "Database Design"],
      highlights: [
        "Dual authentication portals for students and faculty",
        "Personalized dashboards with real-time tracking",
        "Automated attendance management workflows",
        "Analytics and reporting features"
      ],
      type: "Full-stack Project",
      details: "Enterprise-level system designed to streamline college operations with role-based access, automated notifications, and comprehensive reporting features.",
      github: "https://github.com/syedshayanuddin/CMS",
      date: "January - March 2024"
    },
    {
      name: "AI Portfolio Website",
      icon: "",
      image: "/images/portfolio.png",
      description: "Interactive portfolio with conversational AI clone powered by LLMs and RAG for intelligent responses about projects, skills, and experience.",
      tech_stack: ["React", "Node.js", "Express", "Groq API", "RAG", "Vite", "TailwindCSS"],
      highlights: [
        "AI clone with RAG-based knowledge retrieval",
        "Real-time conversational interface",
        "Modern responsive design with smooth scrolling",
        "Section-by-section snap navigation"
      ],
      type: "Current Project",
      details: "Showcases modern web development practices with AI integration. Features a conversational AI that answers questions using retrieval-augmented generation from a curated knowledge base.",
      github: "#",
      date: "December 2024"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <div id="projects" className="min-h-screen w-full bg-white py-16 overflow-y-auto">
        <div className="container mx-auto px-6 w-full">
          {/* Header - IMPRESSIVE GRADIENT */}
          <div className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-fullh-1.5 w-32 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="min-w-full px-4">
                    {/* Project Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                      {/* Image */}
                      <div className="h-72 bg-gradient-to-br from-purple-50 to-blue-50 p-6">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-8xl">
                            {project.icon}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{project.icon}</span>
                          <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                        </div>

                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                          {project.type}
                        </span>

                        <p className="text-gray-600 text-lg mb-6 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech_stack.slice(0, 5).map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                          {project.tech_stack.length > 5 && (
                            <span className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium">
                              +{project.tech_stack.length - 5} more
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => setModalProject(project)}
                          className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                        >
                          View Full Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevProject}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextProject}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-purple-600 w-12' : 'bg-gray-300 w-3'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Want to know more about any project?</p>
            <button 
              onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all"
            >
              Ask my AI Clone 🤖
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-6"
          onClick={() => setModalProject(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            {modalProject.image && (
              <div className="h-96 bg-gradient-to-br from-purple-50 to-blue-50 p-8">
                <img 
                  src={modalProject.image} 
                  alt={modalProject.name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            )}

            <div className="p-10">
              {/* Close Button */}
              <button 
                onClick={() => setModalProject(null)}
                className="float-right text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{modalProject.icon}</span>
                  <h2 className="text-4xl font-bold text-gray-900">{modalProject.name}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
                    {modalProject.type}
                  </span>
                  <span className="text-gray-500 text-lg">{modalProject.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {modalProject.details || modalProject.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-5">Key Features</h4>
                <ul className="space-y-4">
                  {modalProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-600 text-2xl mt-1">✦</span>
                      <span className="text-gray-700 text-lg leading-relaxed flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-5">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {modalProject.tech_stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2.5 bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 rounded-xl border border-purple-100 font-medium text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {modalProject.github && modalProject.github !== '#' && (
                  <a 
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                )}
                {modalProject.demo && (
                  <a 
                    href={modalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg text-center hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
