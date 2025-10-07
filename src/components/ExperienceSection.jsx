const ExperienceSection = () => {
  
  const experiences = [
    {
      icon: 'bi-briefcase',
      colorClass: 'color-1',
      title: 'Full Stack Developer',
      company: 'Responsible for the design and development of the back-end',
      period: '2017-2018',
      description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.'
    },
    {
      icon: 'bi-code-slash',
      colorClass: 'color-2',
      title: 'Front End Developer',
      company: 'Responsible for the design and development of the front-end',
      period: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
      icon: 'bi-laptop',
      colorClass: 'color-3',
      title: 'UI/UX Designer',
      company: 'Responsible for the design and development of the UI/UX',
      period: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
      icon: 'bi-palette',
      colorClass: 'color-4',
      title: 'Web Designer',
      company: 'Responsible for the design and development of the web',
      period: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
      icon: 'bi-phone',
      colorClass: 'color-5',
      title: 'System Analyst',
      company: 'Responsible for the design and development of the system',
      period: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    }
  ]

  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {experiences.map((exp, index) => (
                <article key={index} className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon ${exp.colorClass}`}>
                      <i className={exp.icon}></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">{exp.title}</a> <span>{exp.period}</span>
                      </h2>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection