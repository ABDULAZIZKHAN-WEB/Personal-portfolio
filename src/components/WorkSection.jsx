import { useState } from 'react'

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Work 01',
      category: 'graphic',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Animation'
    },
    {
      id: 2,
      title: 'Work 02',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Web Design'
    },
    {
      id: 3,
      title: 'Work 03',
      category: 'illustration',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop',
      description: 'Illustration'
    },
    {
      id: 4,
      title: 'Work 04',
      category: 'application',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      description: 'Application'
    },
    {
      id: 5,
      title: 'Work 05',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      description: 'Web Design'
    },
    {
      id: 6,
      title: 'Work 06',
      category: 'graphic',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
      description: 'Graphic Design'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'web', label: 'Web Design' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'application', label: 'Application' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Work</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="work-menu text-center">
              {filters.map((filter, index) => (
                <span key={filter.id}>
                  <a 
                    href="#" 
                    className={activeFilter === filter.id ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); setActiveFilter(filter.id) }}
                  >
                    {filter.label}
                  </a>
                  {index < filters.length - 1 && ' | '}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div 
                className="project" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">{project.title}</a></h3>
                    <span>{project.description}</span>
                    <p className="icon">
                      <span><a href="#"><i className="bi bi-share"></i></a></span>
                      <span><a href="#"><i className="bi bi-eye"></i></a></span>
                      <span><a href="#"><i className="bi bi-heart"></i></a></span>
                    </p>
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

export default WorkSection