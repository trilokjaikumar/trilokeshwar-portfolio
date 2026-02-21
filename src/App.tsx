import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Leadership />
      <Contact />
    </div>
  )
}

export default App
