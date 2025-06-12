import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experiences from './sections/Experiences'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  )
}

export default App