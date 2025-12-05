import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ChatUI from './components/ChatUI'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="snap-container">
        <section className="snap-section">
          <Hero />
        </section>
        
        <section className="snap-section">
          <About />
        </section>
        
        <section className="snap-section">
          <Skills />
        </section>
        
        <section className="snap-section">
          <Projects />
        </section>
        
        <section id="chat-section" className="snap-section bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="h-full flex flex-col justify-center w-full overflow-hidden">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Meet ShayanAI
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  My AI clone knows everything about my projects, skills, and experience. 
                  Ask it anything!
                </p>
              </div>
              <ChatUI />
            </div>
          </div>
        </section>

        {/* Last section with Contact + Footer - MUST be scrollable */}
        <section className="snap-section" style={{ overflow: 'auto' }}>
          <div>
            <Contact />
            <Footer />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
