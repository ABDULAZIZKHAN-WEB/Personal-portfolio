import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  }

  const slides = [
    {
      id: 1,
      backgroundImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: "Hi! I'm Abdul Aziz",
      subtitle: 'A Web Designer & Developer based in Bangladesh',
      buttonText: 'Download CV',
      buttonIcon: 'bi-download'
    },
    {
      id: 2,
      backgroundImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'I create digital products',
      subtitle: 'Specialized in Web Design, Development and SEO',
      buttonText: 'View Portfolio',
      buttonIcon: 'bi-briefcase'
    }
  ]

  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide.id}>
              <div
                className="slide-item"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              >
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 col-sm-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>{slide.title}</h1>
                          <h2>{slide.subtitle}</h2>
                          <p>
                            <a className="btn btn-primary btn-learn" href="#">
                              {slide.buttonText} <i className={`bi ${slide.buttonIcon}`}></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default HeroSection