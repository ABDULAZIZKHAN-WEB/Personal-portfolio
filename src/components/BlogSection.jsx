const BlogSection = () => {
  
  const blogPosts = [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2018',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2018',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2018',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    }
  ]

  return (
    <section className="colorlib-blog" data-section="blog">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 offset-md-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Read</span>
            <h2 className="colorlib-heading">Recent Blog</h2>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="blog-entry">
                <a 
                  href="blog.html" 
                  className="blog-img"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></a>
                <div className="desc">
                  <span><small>{post.date}</small> | <small>Web Design</small> | <small><i className="bi bi-chat"></i> 19</small></span>
                  <h3><a href="blog.html">{post.title}</a></h3>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection