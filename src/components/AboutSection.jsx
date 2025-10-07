const AboutSection = () => {
  const services = [
    {
      icon: 'bi-palette',
      title: 'Graphic Design',
      description: 'Creating visually appealing designs that communicate your brand\'s message effectively.',
      color: 'var(--color1)'
    },
    {
      icon: 'bi-code-slash',
      title: 'Web Design',
      description: 'Designing responsive and user-friendly websites that work across all devices.',
      color: 'var(--color2)'
    },
    {
      icon: 'bi-server',
      title: 'Web Development',
      description: 'Building robust and scalable web applications using modern technologies.',
      color: 'var(--color3)'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications for iOS and Android.',
      color: 'var(--color4)'
    }
  ]

  return (
    <section id="about" className="colorlib-about" data-section="about">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center heading-section">
            <h2 className="mb-4">About Me</h2>
            <p>
              Hi, I'm Abdul Aziz Khan, a passionate web designer and developer from Bangladesh with
              over 5 years of experience creating digital solutions for clients worldwide.
            </p>
          </div>
        </div>

        <div className="row text-center g-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="col-md-3" 
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="card about-card border-0">
                <div className="card-body">
                  <i 
                    className={`${service.icon} fs-1`} 
                    style={{ color: service.color }}
                  ></i>
                  <h5 className="mt-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-5 text-center rounded highlight-box">
          <h4 className="fw-bold">I am happy to know you that 100+ projects done successfully!</h4>
          <button className="btn btn-primary mt-3">Hire Me</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection