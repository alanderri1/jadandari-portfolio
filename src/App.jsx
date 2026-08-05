import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Process from './pages/Process'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen flex flex-col">
      <CustomCursor />
      <GrainOverlay />
      <Nav />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
