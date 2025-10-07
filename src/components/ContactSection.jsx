import { useState } from 'react'

const ContactSection = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      content: '198 West 21th Street, Suite 721 New York NY 10016'
    },
    {
      icon: 'bi-telephone',
      title: 'Contact Number',
      content: '+1 1234 55488 55'
    },
    {
      icon: 'bi-envelope',
      title: 'Email Address',
      content: 'info@yoursite.com'
    },
    {
      icon: 'bi-globe',
      title: 'Website',
      content: 'yoursite.com'
    }
  ]

  return (
    <section className="colorlib-contact" data-section="contact">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Get in Touch</span>
            <h2 className="colorlib-heading">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="colorlib-text">
                  <p><a href="#">{info.content}</a></p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-10 offset-md-1 animate-box" data-animate-effect="fadeInRight">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      className="form-control" 
                      cols="30" 
                      rows="7" 
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button 
                      type="submit" 
                      className={`btn btn-primary btn-send-message ${isSubmitting ? 'btn-loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection