import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      name: "InterviewAIde",
      description: "AI-powered interview preparation platform with real-time feedback and personalized coaching to help candidates ace their interviews.",
      tech_stack: ["AI/ML", "NLP", "Python", "React", "Machine Learning"],
      highlights: [
        "Real-time interview simulation with AI feedback",
        "Personalized coaching based on performance analysis",
        "AI-driven speech and content analysis"
      ],
      type: "AI/ML Project"
    },
    {
      name: "College Management System",
      description: "Comprehensive management platform for educational institutions with automated workflows and multi-role access control.",
      tech_stack: ["Full-stack", "Database Design", "Backend API", "React"],
      highlights: [
        "Multi-role access control for students, faculty, and admin",
        "Automated workflows for academic processes",
        "Real-time data management and reporting"
      ],
      type: "Full-stack Project"
    },
    {
      name: "AI Portfolio Website",
      description: "Interactive portfolio with conversational AI clone powered by LLMs and RAG for intelligent responses about projects and skills.",
      tech_stack: ["React", "Node.js", "Express", "Groq API", "RAG", "Vite"],
      highlights: [
        "AI clone with RAG-based knowledge retrieval",
        "Real-time conversational interface",
        "Modern responsive design with Tailwind CSS"
      ],
      type: "Current Project"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            💼 My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building intelligent systems and full-stack applications that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to know more about any project?</p>
          <button 
            onClick={() => {
              document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Ask my AI Clone 🤖
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
