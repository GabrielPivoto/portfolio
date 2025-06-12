import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Contact />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  )
}

export default App