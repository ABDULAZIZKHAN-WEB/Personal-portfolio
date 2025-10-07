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
    <section className="colorlib-education" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {educationData.map((item, index) => (
                  <div key={item.id} className="panel panel-default">
                    <div
                      className={`panel-heading ${activePanel === item.id ? 'active' : ''}`}
                      role="tab"
                      id={`heading${index + 1}`}
                    >
                      <h4 className="panel-title">
                        <a
                          onClick={(e) => { e.preventDefault(); togglePanel(item.id) }}
                          className={activePanel === item.id ? '' : 'collapsed'}
                          href="#"
                          aria-expanded={activePanel === item.id}
                          aria-controls={item.id}
                        >
                          {item.title}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={item.id}
                      className={`panel-collapse collapse ${activePanel === item.id ? 'in' : ''}`}
                      role="tabpanel"
                      aria-labelledby={`heading${index + 1}`}
                    >
                      <div className="panel-body">
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