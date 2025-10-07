import { useState, useEffect, useRef } from 'react'

const CounterSection = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 309, label: 'Cups of coffee' },
    { value: 0, target: 356, label: 'Projects' },
    { value: 0, target: 30, label: 'Clients' },
    { value: 0, target: 10, label: 'Partners' }
  ])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 }
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

  const animateCounters = () => {
    counters.forEach((counter, index) => {
      let current = 0
      const increment = counter.target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= counter.target) {
          current = counter.target
          clearInterval(timer)
        }
        setCounters(prev => 
          prev.map((c, i) => 
            i === index ? { ...c, value: Math.floor(current) } : c
          )
        )
      }, 30)
    })
  }

  return (
    <div 
      ref={sectionRef}
      id="colorlib-counter" 
      className="colorlib-counters text-white position-relative" 
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(0,0,0,0.6)' }}
      ></div>

      <div className="colorlib-narrow-content position-relative py-5">
        <div className="container">
          <div className="row justify-content-center text-center text-white">
            {counters.map((counter, index) => (
              <div key={index} className="col-md-3 mb-4">
                <span className="colorlib-counter js-counter d-block fs-1 fw-bold">
                  {counter.value}
                </span>
                <span className="colorlib-counter-label d-block mt-2">
                  {counter.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterSection