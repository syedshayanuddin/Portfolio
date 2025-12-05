function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              👨‍💻 Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Building the Future with AI/ML
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm Shayan, an AI/ML Engineer and Software Developer passionate about creating 
                intelligent systems that make a real-world impact. Currently pursuing higher 
                education with a focus on Cloud and Data Science.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My expertise spans across AI/ML, full-stack development, and iOS applications. 
                I specialize in building systems that leverage NLP, deep learning, and LLM 
                technologies to solve complex problems.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focus Areas</h4>
                    <p className="text-gray-600">AI/ML Engineering, Full-stack Development, iOS Development</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                    <p className="text-gray-600">Currently studying Cloud/Data Science (Oracle OCI)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Interests</h4>
                    <p className="text-gray-600">Building intelligent systems, NLP, Web applications, Mobile apps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats/Highlights */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">AI/ML</span>
                      <span className="text-purple-600 font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Full-stack Development</span>
                      <span className="text-purple-600 font-semibold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">iOS Development</span>
                      <span className="text-purple-600 font-semibold">Proficient</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-purple-100">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-purple-100">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
