import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'

function App() {
  return (
    <>
      <Navbar />
      <main className="antialiased">
        <Hero />
        <Quiz />
      </main>
    </>
  )
}

export default App
