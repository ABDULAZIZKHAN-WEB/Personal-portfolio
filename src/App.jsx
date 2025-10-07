import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './App.css'
import Sidebar from './components/Sidebar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import CounterSection from './components/CounterSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import WorkSection from './components/WorkSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        id="mobile-menu-toggle"
        onClick={toggleMobileMenu}
      >
        <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>

      <div id="colorlib-page">
        <div className="container-wrap">
          <Sidebar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

          {/* Main Content */}
          <div id="colorlib-main" className="main-content">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CounterSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <WorkSection />
            <BlogSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
