import { useState } from 'react';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div 
        onClick={() => setShowModal(true)}
        className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 h-full flex flex-col"
      >
        {/* Image */}
        {project.image ? (
          <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full items-center justify-center text-6xl hidden">
              {project.icon}
            </div>
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
            <span className="text-6xl">{project.icon}</span>
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{project.icon}</span>
            <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
          </div>
          
          <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3 w-fit">
            {project.type}
          </span>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech_stack.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.tech_stack.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                +{project.tech_stack.length - 3}
              </span>
            )}
          </div>

          <button className="w-full py-2 text-purple-600 font-semibold text-sm hover:bg-purple-50 rounded-lg transition-colors">
            View Details →
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            {project.image && (
              <div className="h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{project.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <span className="text-gray-500 text-sm">{project.date}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{project.details || project.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-purple-600 mt-1">✦</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 rounded-lg text-sm border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && project.github !== '#' && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default ProjectCard;
