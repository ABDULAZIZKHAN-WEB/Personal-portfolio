import { useState } from 'react'

const EducationSection = () => {
  const [activePanel, setActivePanel] = useState('collapseOne')

  const educationData = [
    {
      id: 'collapseOne',
      title: 'Master Degree Graphic Design',
      content: {
        col1: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        col2: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      }
    },
    {
      id: 'collapseTwo',
      title: 'Bachelor Degree of Computer Science',
      content: {
        col1: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        list: [
          'Separated they live in Bookmarksgrove right',
          'Separated they live in Bookmarksgrove right'
        ]
      }
    },
    {
      id: 'collapseThree',
      title: 'Diploma in Information Technology',
      content: {
        col1: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        col2: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      }
    }
  ]

  const togglePanel = (panelId) => {
    setActivePanel(activePanel === panelId ? '' : panelId)
  }

  return (
    <section className="colorlib-education" data-section="education" style={{ padding: '100px 0', background: '#f8f9fa', minHeight: '400px' }}>
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel" style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {educationData.map((item, index) => (
                  <div key={item.id} className="panel panel-default">
                    <div
                      className={`panel-heading ${activePanel === item.id ? 'active' : ''}`}
                      role="tab"
                      id={`heading${index + 1}`}
                      style={{ background: activePanel === item.id ? '#f9ca24' : '#fff', borderBottom: '1px solid #eee', padding: '0' }}
                    >
                      <h4 className="panel-title">
                        <a
                          onClick={(e) => { e.preventDefault(); togglePanel(item.id) }}
                          className={activePanel === item.id ? '' : 'collapsed'}
                          href="#"
                          aria-expanded={activePanel === item.id}
                          aria-controls={item.id}
                          style={{ 
                            display: 'block', 
                            padding: '20px 30px', 
                            color: activePanel === item.id ? 'white' : '#000', 
                            textDecoration: 'none', 
                            fontWeight: '600', 
                            fontSize: '18px',
                            transition: '0.3s',
                            position: 'relative'
                          }}
                        >
                          {item.title}
                          <span style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>
                            {activePanel === item.id ? '−' : '+'}
                          </span>
                        </a>
                      </h4>
                    </div>
                    {activePanel === item.id && (
                      <div
                        id={item.id}
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby={`heading${index + 1}`}
                        style={{ display: 'block' }}
                      >
                        <div className="panel-body" style={{ padding: '30px', background: '#f8f9fa' }}>
                          {item.content.col2 ? (
                            <div className="row">
                              <div className="col-md-6">
                                <p>{item.content.col1}</p>
                              </div>
                              <div className="col-md-6">
                                <p>{item.content.col2}</p>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p>{item.content.col1}</p>
                              {item.content.list && (
                                <ul>
                                  {item.content.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection