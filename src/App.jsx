import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import SocialProof from './components/SocialProof'
import ProductionVideo from './components/ProductionVideo'
import ProfileQuality from './components/ProfileQuality'
import WindowMaintenance from './components/WindowMaintenance'
import ValueProposition from './components/ValueProposition'
import LocationShowcase from './components/LocationShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="antialiased">
        <Hero />
        <SocialProof />
        <Quiz />
        <ProductionVideo />
        <ProfileQuality />
        <WindowMaintenance />
        <ValueProposition />
        <LocationShowcase />
      </main>
      <Footer />
    </>
  )
}

export default App
