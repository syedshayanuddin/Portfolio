function About() {
  const education = [
    {
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      school: "Muffakham Jah College of Engineering and Technology",
      period: "2022 - Present",
      gpa: "8.6 GPA",
      location: "Hyderabad, India"
    }
  ];

  const certifications = [
    {
      name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      icon: "🏅",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DC18E4F9A1F6ED2FD0B902EF94804A6DFFBF370990340A4ACD475A3488AF1A6D"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      issuer: "Oracle",
      icon: "🎓",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4971F07FD49876A038A9A51B30C8ADF7A7DB64F5225C02B9EDA9B5A395BE4D34"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Data Science Professional",
      issuer: "Oracle",
      icon: "📊",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=530F3BB60E10CA4294A38AA01E20EAF88898FA6E0AEC09EEF7167A6B2718627A"
    }
  ];

  const achievements = [
    {
      title: "Merit Certificate",
      year: "2024, 2025",
      description: "Highest SGPA in semester"
    },
    {
      title: "Top Academic Achievement Honor",
      year: "2020",
      description: "Outstanding academic performance"
    },
    {
      title: "Best Student Award",
      year: "2020",
      description: "Overall excellence in academics and extracurriculars"
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-20 overflow-y-auto">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate <strong>AI/ML Engineer</strong> and <strong>Full-stack Developer</strong> currently pursuing my B.E. in Artificial Intelligence and Machine Learning at MJCET, Hyderabad. With a strong foundation in both theoretical concepts and practical implementation, I specialize in building intelligent systems that make a real-world impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in tech is driven by curiosity and a constant desire to learn. From fine-tuning LLMs for interview preparation to building full-stack web applications, I love tackling challenging problems and creating solutions that are both innovative and user-friendly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new AI technologies, contributing to open-source projects, or experimenting with the latest in machine learning and generative AI. I'm always excited to collaborate on projects that push the boundaries of what's possible with AI.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-lg text-purple-600 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg font-semibold text-gray-900 mb-1">{edu.gpa}</p>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications - Now Clickable */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <a 
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-purple-600 font-semibold mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                  <span>View Credential</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm font-semibold text-purple-600">{achievement.year}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
