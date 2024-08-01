import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headerStyle = {
  background: 'rgba(0, 0, 0, 0.7) url("https://media.istockphoto.com/id/1305012465/vector/internet-connection-abstract-sense-of-science-and-technology-graphic-design-background.jpg?s=612x612&w=0&k=20&c=WC7evuE5zPhwRv8hk9uiydDAQGca-WKKRHlTrFjEOD8=") no-repeat center center fixed',
  backgroundSize: 'cover',
  fontFamily: "'Roboto', sans-serif",
  color: '#fff',
  padding: '1em 0',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1em 2em',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
};

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'url("https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Organic-Shapes-Stars-by-SlidesCorner.com_.jpg") no-repeat center center fixed',
  backgroundSize: 'cover'
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoImgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '10px',
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '1px',
  margin: 0,
  padding: '10px',
};

const navItemStyle = {
  margin: '0 1em',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1em',
  padding: '0.5em 1em',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
  fontFamily: "cursive",
};

const navLinkHoverStyle = {
  backgroundColor: '#fff',
  color: '#000',
};

const heroStyle = {
  fontFamily: "'Georgia', serif",
  color: '#000000',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '200px',
  fontSize: 'x-large',
  background: 'rgba(0, 0, 0, 0.7) url("https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Organic-Shapes-Stars-by-SlidesCorner.com_.jpg") no-repeat center center fixed',
  backgroundSize: 'cover',
  marginTop: '10px',
  padding: '20px',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
};

const gradientTextStyle = {
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const heroHeadingStyle = {
  ...gradientTextStyle,
  fontSize: '2em',
  marginBottom: '0.5em',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
};

const heroTextStyle = {
  ...gradientTextStyle,
  fontSize: '1.2em',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
};

const aboutContainerStyle = {
  background: 'rgba(0, 0, 0, 0.7) url("https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Organic-Shapes-Stars-by-SlidesCorner.com_.jpg") no-repeat center center fixed',
  backgroundSize: 'cover',
  color: '#000000',
  padding: '0',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: "'Verdana', sans-serif",
  gap: '2em',
  margin: '20px auto',
  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
};

const aboutContainerHoverStyle = {
  transform: 'rotateY(10deg) scale(1.05)',
  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
};

const aboutGifStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const aboutGifImgStyle = {
  width: '495px',
  height: '350px',
  borderRadius: '10px'
};

const aboutTextStyle = {
  flex: '2',
  textAlign: 'left'
};

const aboutTitleStyle = {
  backgroundColor: '#444',
  textAlign: 'center',
  color: '#fff',
  padding: '0.5em',
  borderRadius: '5px',
  marginBottom: '1em',
  fontSize: '2em'
};

const aboutContentStyle = {
  fontFamily: "'Verdana', sans-serif",
  color: '#333',
};

const articleSectionStyle = {
  margin: '2em 0',
  width: '80%',
  margin: '0 auto'
};

const articleHeadingStyle = {
  fontFamily: "'Georgia', serif",
  color: '#000000',
  textAlign: 'center',
  fontSize: '2em',
  marginBottom: '1em',
};

const articleStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  margin: '1em',
  padding: '1em',
  flexBasis: 'calc(30% - 2em)',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
};

const articleHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
};

const readMoreStyle = {
  color: '#0066cc',
  textDecoration: 'none'
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1em 0',
  marginTop: 'auto'
};

function Articles() {
  const carouselImages = [
    {
      title: 'Exploring Space',
      image: 'https://media.licdn.com/dms/image/D4E22AQGlsVZSMfjBMw/feedshare-shrink_800/0/1689328031303?e=2147483647&v=beta&t=Dk2430zGONYnQnQrbZPG-_tCeTVQka21M8JwD5oi1D8'
    },
    {
      title: 'Innovations in Robotics',
      image: 'https://your-site.com/images/robotics.jpg'
    },
    {
      title: 'Climate Change Solutions',
      image: 'https://your-site.com/images/climate-change.jpg'
    }
  ];

  const articles = [
    {
      title: 'The Future of Quantum Computing',
      content: 'Quantum computing is a rapidly growing field in computer science. It leverages the principles of quantum mechanics to perform complex calculations much faster than classical computers. Researchers are exploring various algorithms that could revolutionize industries such as cryptography, drug discovery, and more.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQCiT3Q8ec8MxW80C6Yv8AdqBz4pcriAZPxmA7NvLUz6PCLIjwGAiDQLtFTtxaIWhiTo&usqp=CAU',
      link: '#'
    },
    {
      title: 'Advancements in Artificial Intelligence',
      content: 'Artificial Intelligence (AI) continues to advance at an unprecedented pace. From natural language processing to machine learning, AI is transforming how we interact with technology. Recent breakthroughs include more accurate language models, enhanced image recognition, and autonomous systems.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntgSGHzOMK91oedy0F9ci2HB7xdW8_yCsaQ&usqp=CAU',
      link: '#'
    },
    {
      title: 'The Rise of Renewable Energy Technologies',
      content: 'Renewable energy technologies such as solar, wind, and hydropower are becoming increasingly efficient and cost-effective. Innovations in energy storage and grid management are making it possible to integrate more renewable energy into the grid, reducing our reliance on fossil fuels.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf98IfENwXE5gNt85akuSUnHglpSY1JAbW5Q&usqp=CAU',
      link: '#'
    }
  ];

  return (
    <div style={mainContainerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/732/732598.png" alt="Logo" style={logoImgStyle} />
          <h1 style={{ fontFamily: "'Roboto', sans-serif", color: '' }}>𝚂𝚌𝚒𝚎𝚗𝚌𝚎 𝚊𝚗𝚍 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢 </h1>
        </div>
        <nav>
          <ul style={navStyle}>
            {['Home', 'About', 'Blog', 'Quizzee', 'Contact'].map((link, index) => (
              <li key={index} style={navItemStyle}>
                <a
                  href="#"
                  style={navLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                    e.target.style.color = navLinkHoverStyle.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#fff';
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main style={{ marginTop: '100px' }}>
        <section style={heroStyle}>
          <h2 style={heroHeadingStyle}>Welcome to SciTech</h2>
          <p style={heroTextStyle}>Stay updated with the latest in science and technology.</p>
        </section>
        <section id="about">
          <div
            style={aboutContainerStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = aboutContainerHoverStyle.transform;
              e.currentTarget.style.boxShadow = aboutContainerHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
            }}
          >
            <div style={aboutGifStyle}>
              <img src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/04/040823_chatgpt_feat.gif" alt="Science and Technology GIF" style={aboutGifImgStyle} />
            </div>
            <div style={aboutTextStyle}>
              <h2 style={aboutTitleStyle}>About SciTech</h2>
              <p style={aboutContentStyle}>
                Science is essentially 'knowledge' and is concerned with human understanding of the real world around us - the inherent properties of space, matter, energy, and their interaction. It is the concomitant of the inquiring mind, wanting to unravel the mysteries of nature, unbiased, fearless, and free.
              </p>
              <p style={aboutContentStyle}>
                Science and technology are among the basic factors in the dividing wall between poverty and prosperity. There is no doubt that science and technology have shaped and reshaped India over the years. The result of research and experimentation is seen in the transformation of a subsistence agriculture into commercial agriculture: eradication of diseases like plague and smallpox; establishment and rapid development of an industrial base; development of electronics, nuclear energy capability, space exploration, oceanography, all being dovetailed to meet socio-economic needs.
              </p>
            </div>
          </div>
        </section>
        <section style={articleSectionStyle}>
          <h2 style={articleHeadingStyle}>Top Features</h2>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            {carouselImages.map((slide, index) => (
              <div key={index}>
                <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                <p className="legend" style={{ fontSize: '1.5em', background: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>{slide.title}</p>
              </div>
            ))}
          </Carousel>
        </section>
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '2em 1em' }}>
          {articles.map((article, index) => (
            <article
              key={index}
              style={articleStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = articleHoverStyle.transform;
                e.currentTarget.style.boxShadow = articleHoverStyle.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
              }}
            >
              <img src={article.image} alt={article.title} style={{ maxWidth: '100%', height: 'auto' }} />
              <h3 style={{ marginTop: '1em' }}>{article.title}</h3>
              <p>{article.content}</p>
              <a href={article.link} style={readMoreStyle}>Read more</a>
            </article>
          ))}
        </section>
      </main>
      <footer style={footerStyle}>
        <p>@Happy Learning</p>
      </footer>
    </div>
  );
}

export default Articles;
