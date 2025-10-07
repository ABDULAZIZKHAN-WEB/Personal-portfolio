import { useState, useEffect } from 'react'

const Sidebar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'education', 'experience', 'work', 'blog', 'contact']
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        const element = document.querySelector(`[data-section="${section}"]`)
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight
          
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (window.innerWidth <= 991) {
      toggleMobileMenu()
    }
  }

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <aside 
      id="colorlib-aside" 
      role="complementary" 
      className={`js-fullheight ${mobileMenuOpen ? 'mobile-open' : ''}`}
    >
      <div className="text-center">
        <div 
          className="author-img" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face)' }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
            Abdul Aziz Khan
          </a>
        </h1>
        <span className="position">Web Designer and Developer in Bangladesh</span>
      </div>
      
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <ul>
          {menuItems.map(item => (
            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="colorlib-footer">
        <p>
          <small>
            &copy; {new Date().getFullYear()} Made By Abdul Aziz Khan
        
            
          </small>
        </p>
        <ul>
          <li><a href="#"><i className="bi bi-facebook"></i></a></li>
          <li><a href="#"><i className="bi bi-twitter"></i></a></li>
          <li><a href="#"><i className="bi bi-instagram"></i></a></li>
          <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar