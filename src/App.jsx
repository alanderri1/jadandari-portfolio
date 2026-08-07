import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Portraits from './pages/Portraits'
import Films from './pages/Films'

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
            <Route path="/portraits" element={<PageTransition><Portraits /></PageTransition>} />
            <Route path="/films" element={<PageTransition><Films /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
