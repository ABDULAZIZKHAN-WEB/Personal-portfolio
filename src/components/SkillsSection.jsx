import { useState, useEffect, useRef } from 'react'

const SkillsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const skills = [
    { name: 'Photoshop', percentage: 75, colorClass: 'color-1' },
    { name: 'jQuery', percentage: 60, colorClass: 'color-2' },
    { name: 'HTML5', percentage: 85, colorClass: 'color-3' },
    { name: 'CSS3', percentage: 90, colorClass: 'color-4' },
    { name: 'WordPress', percentage: 70, colorClass: 'color-5' },
    { name: 'SEO', percentage: 80, colorClass: 'color-6' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateProgressBars()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar')
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('aria-valuenow') + '%'
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.width = width
      }, 100)
    })
  }

  return (
    <section ref={sectionRef} className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <span className="heading-meta">My Specialty</span>
            <h2 className="colorlib-heading">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
              She packed her seven versalia, put her initial into the belt and made herself on the way.
            </p>
          </div>
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6">
              <div className="progress-wrap">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div 
                    className={`progress-bar ${skill.colorClass}`} 
                    role="progressbar" 
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ 
                      width: hasAnimated ? `${skill.percentage}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  >
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection