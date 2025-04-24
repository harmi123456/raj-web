import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import devtools from 'devtools-detect';


export default function Blog() {


  //devTools for prevent source Code
  if (devtools.isOpen) {
    alert("Developer tools are open! Be careful. 🚨");
  }

  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'J') ||
      (e.ctrlKey && e.key === 'U') // Prevents "View Page Source" (Ctrl + U)
    ) {
      alert("DevTools access is restricted!");
      e.preventDefault();
    }
  });


  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //WhatsApp icons
  const phoneNumber = "919328623606";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };


  //privacy
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("🔒 Content Protected!");
    };

    document.addEventListener("contextmenu", handleContextMenu);


    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };

  }, []);



  return (
    <div id='sec1'>

      <header>

        <div className="bars" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div className="logo">
          <img src="/img/logo.png" alt="Protected" />
        </div>

        <nav className={isNavVisible ? 'show' : ''}>
          <Link to='/' >Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutUs'>About us</Link>
          <Link to='/blog' style={{ color: 'green', fontWeight: 'bold' }}>Blog</Link>
          <Link to='/contactUs'>Contact us</Link>
        </nav>

        <div className="icon">

          <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target='_blank'>
            <div className='insta'><i class="fa-brands fa-instagram"></i></div>
          </a>
          <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-facebook-f"></i></div>
          </a>
          <a href="https://www.linkedin.com/company/rangrag-studio/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-linkedin-in"></i></div>
          </a>
          <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target='_blank'>
            <div className="insta"><i class="fa-brands fa-youtube"></i></div>
          </a>

        </div>

      </header>


      <section class="hero-section">
        <div class="hero-content">
          <h1>Transform Your Space, Elevate Your Style!</h1>
          <p>Discover innovative interior design ideas that reflect your personality.</p>
        </div>
      </section>

      <section class="blog-categories">
        <h2>Explore Blog Categories</h2>
        <div class="categories-container">
          <div class="category-card">
            <img src="/residential/8.jpg" alt="Home Decor" />
            <h3>Home Decor</h3>
            <p>Furniture placement, DIY decor tips, and more.</p>
          </div>
          <div class="category-card">
            <img src="/corporate/3.jpg" alt="Office Spaces" />
            <h3>Office Spaces</h3>
            <p>Productivity-friendly office designs and setups.</p>
          </div>
          <div class="category-card">
            <img src="/residential/Scene 3_2.jpg" alt="Living Spaces" />
            <h3>Living Spaces</h3>
            <p>Modern, minimalistic, or luxurious designs.</p>
          </div>
          <div class="category-card">
            <img src="/img/kidsroom.jpg" alt="Kids Room" />
            <h3>Kids' Room Designs</h3>
            <p>Creative ideas for fun and functional spaces.</p>
          </div>
          <div class="category-card">
            <img src="/residential/Scene 30(1).jpg" alt="Sustainable Designs" />
            <h3>Sustainable Designs</h3>
            <p>Eco-friendly interior trends for a greener home.</p>
          </div>
        </div>
      </section>

      {/* //VR section */}

      <section class="vr-biocentric">
        <div class="content-container">
          <h2>Revolutionizing Interiors with <br /> VR Technology </h2>
          <p>
            Virtual Reality (VR) is transforming interior design by offering immersive 3D experiences,
            enabling clients to visualize spaces before they’re built. Combine this with the principles
            of <strong>biophilic architecture</strong>, and you get interiors that not only look stunning
            but also promote a deeper connection with nature.
          </p>
          <p>
            From creating eco-friendly spaces to designing smart homes with real-time simulations,
            the integration of VR in <strong>interior design trends</strong> is setting new benchmarks.
            Explore how technology meets sustainability with innovative <strong>biophilic design concepts</strong>.
          </p>
          <a href="#" class="learn-more">Learn More</a>
        </div>

        <div class="blog-image-container">


          <div style={{ width: "100%", height: "500px" }}>
            <a-scene embedded arjs>
              <a-assets>
                <img id="MySky" crossorigin src="/img/vr.jpg" alt="360 Panorama" />
              </a-assets>

              <a-sky src="#MySky"></a-sky>
            </a-scene>
          </div>

        </div>

      </section>


      <section class="vr-biocentric">
        <div class="blog-image-container">
          <img src="/img/biophilic-1.jpg" alt="Biophilic Architecture" />
        </div>
        <div class="content-container">
          <h2>Biophilic Design: Merging Nature with Modern Spaces</h2>
          <p>
            Biophilic architecture integrates natural elements into modern interiors,
            bringing serenity and sustainability into homes and offices. This innovative
            approach enhances well-being by connecting people with nature.
          </p>
          <p>
            Discover how green walls, natural lighting, and sustainable materials are
            redefining contemporary design. Embrace biophilic concepts to create
            healthier and more inspiring spaces.
          </p>
          <a href="#" class="learn-more">Learn More</a>
        </div>
      </section>


      <div className="blog-sec2">

        <section className="blog-section">

          <h2>Our Blog</h2>

          <div className="blog-grid">

            <div className="blog-post">
              <img src="/img/41.jpg" alt="Stylish Living Room" />
              <h3>Stylish Living Room Ideas</h3>
              <p>Discover how to create a modern and cozy living room...</p>
              <a href="/blog/stylish-living-room-ideas">Read More</a>
            </div>

            <div className="blog-post">
              <img src="/img/3.1.jpg" alt="Kitchen Design Trends" />
              <h3>Top Kitchen Design Trends</h3>
              <p>Explore the latest trends in kitchen design for this year...</p>
              <a href="/blog/top-kitchen-design-trends">Read More</a>
            </div>

            <div className="blog-post">
              <img src="/img/34.jpg" alt="Bedroom Design Inspiration" />
              <h3>Bedroom Design Inspiration</h3>
              <p>Tips to transform your bedroom into a relaxing sanctuary.</p>
              <a href="/blog/bedroom-design-inspiration">Read More</a>
            </div>

            <div className="blog-post">
              <img src="/img/ex_2.jpg" alt="Outdoor Patio Designs" />
              <h3>Transform patios into elegant retreats</h3>
              <p>Ideas to create a stunning and functional outdoor patio space.</p>
              <a href="/blog/outdoor-patio-designs">Read More</a>
            </div>

          </div>

        </section>

      </div>


      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>
              We specialize in creating unique and stunning interior designs that transform your spaces into luxurious and comfortable havens.
            </p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/projects'>PROJECTS</Link></li>
              <li><Link to='/services'>SERVICES</Link></li>
              <li><Link to='/aboutUs'>AboutUs</Link> </li>

            </ul>
          </div>

          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: contanct@rangragstudio.in</p>
            <p>Phone: +91 9328623606</p>
            <p>Address: 203 Sanskar enclave, rajkot, Gujarat</p>
          </div>

          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter for design tips and updates!</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Interior Design Co. All Rights Reserved.</p>
          <div className="footer-social">

            <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.justdial.com/Rajkot/Rangrag-Studio-Near-Haridarshan-School-Mavdi/0281PX281-X281-240707141959-Z2N8_BZDET?catid=&checkin=&checkout=&vpfs=&stxt=%20Interior%203D%20Visualization%20Services&nid=11466419&stype=category_list&search=Interior-3D-Visualization-Services&area=Near%20Haridarshan%20School%20Mavdi&type=Architectural%20Walkthroughs&totalJdReviews=undefined&bdmsgtype=7&bdcaptiontype=6&bdpage=rsltpge&slectedDimgTag=&show_open_abd=0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i></a>

          </div>
        </div>
      </footer>


      <div className="parent-div">

        {/* Divs to show/hide */}
        {showIcons && (

          <div className="h-icons">
            <div className="hidden-icons" onClick={makeCall}>
              <i className="fa fa-phone"></i>
            </div>
            <div className="hidden-icons" onClick={openWhatsApp}>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

        )}

        <div className="icon-div" onClick={toggleIcons}>
          <i className="fa-brands fa-whatsapp  whatsapp-icon"></i>
          <i className="fa fa-phone call-icon"></i>
        </div>

      </div>

      <div className="up">
        <a href="#sec1"><img src="/img/chervon.png" alt="" /></a>
      </div>

    </div>
  )
}
