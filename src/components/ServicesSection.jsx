const ServicesSection = () => {
  const services = [
    {
      icon: 'bi-lightbulb',
      title: 'Innovative Ideas',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-1',
      aos: 'fade-right'
    },
    {
      icon: 'bi-code-slash',
      title: 'Software',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-2',
      aos: 'flip-left'
    },
    {
      icon: 'bi-phone',
      title: 'Application',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-3',
      aos: 'fade-left'
    },
    {
      icon: 'bi-palette',
      title: 'Graphic Design',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-4',
      aos: 'fade-right'
    },
    {
      icon: 'bi-laptop',
      title: 'Web Development',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-5',
      aos: 'flip-left'
    },
    {
      icon: 'bi-search',
      title: 'SEO',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-6',
      aos: 'fade-left'
    }
  ]

  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          {services.map((service, index) => (
            <div 
              key={index}
              className="col-md-4 text-center" 
              data-aos={service.aos}
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className={`services ${service.colorClass}`}>
                <span className="icon">
                  <i className={service.icon}></i>
                </span>
                <div className="desc">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection