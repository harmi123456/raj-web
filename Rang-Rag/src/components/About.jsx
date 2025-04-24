import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import devtools from 'devtools-detect';


export default function About() {


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
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutUs' style={{ color: 'green', fontWeight: 'bold' }}>About us</Link>
          <Link to='/blog'>Blog</Link>
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

      <div className='about-sec1'>
        <h1>About Us</h1>
        <p>We transform spaces with innovative interior design solutions that reflect <br /> your unique style and personality.</p>
      </div>

      <div className="about-sec2">

        <div className="about-us-content">
          <h2 className="about-us-subtitle">Rangrag Studio – 3D Visualization Experts</h2>
          <p className="about-us-text">
            Welcome to <strong>Rangrag Studio</strong>, your trusted partner in architectural
            and interior 3D visualization. Based on a foundation of creativity and
            technical expertise, Rangrag Studio brings designs to life with
            photorealistic renders that tell compelling visual stories.
          </p>
          <h3 className="about-us-heading">Who We Are</h3>
          <p className="about-us-text">
            Founded by <strong> Trushal Shekhada & Raj Shekhada </strong>, Rangrag Studio is a passionate team of
            skilled visualizers and designers specializing in crafting
            high-quality 3D visuals. Our mission is to empower architects,
            interior designers, real estate developers, and creative professionals
            by transforming their ideas into stunning, immersive visuals.
          </p>
        </div>
        <div className="about-us-image">
          <img src="/img/rang-rag.jpg" alt="Rangrag Studio" className="about-us-img" />
        </div>


      </div>


      <div className="about-sec3">

        <h2>What We Do</h2>

        <div className="about-services">

          <div className="about-service-item">
            <img src="/img/about-3d.gif" alt="Photorealistic 3D Renderings" />
            <h3>Photorealistic 3D Renderings</h3>
            <p>From intricate interiors to expansive exteriors, our renders capture every detail with precision and style.</p>
          </div>

          <div className="about-service-item">
            <img src="/img/archi.gif" alt="Architectural Visualizations" />
            <h3>Architectural Visualizations</h3>
            <p>Showcase your architectural projects with striking visuals that leave a lasting impression.</p>
          </div>

          <div className="about-service-item">
            <img src="/img/intirior.gif" alt="Interior Visualizations" />
            <h3>Interior Visualizations</h3>
            <p>Help clients envision their dream spaces with lifelike 3D interior designs.</p>
          </div>

          <div className="about-service-item">
            <img src="/img/3d-animate.gif" alt="3D Walkthroughs and Animations" />
            <h3>3D Walkthroughs and Animations</h3>
            <p>Immerse your audience in interactive and dynamic presentations.</p>
          </div>

        </div>

        <h2>Why Choose Rangrag Studio?</h2>

        <div className="about-reasons">

          <div className="about-reason-item">
            <img src="https://cdn-icons-png.flaticon.com/128/11612/11612173.png" alt="Unmatched Quality" />
            <h3>Unmatched Quality</h3>
            <p>Our renders stand out for their detail, realism, and emotional impact.</p>
          </div>

          <div className="about-reason-item">
            <img src="https://cdn-icons-gif.flaticon.com/15401/15401331.gif" alt="Tailored Solutions" />
            <h3>Tailored Solutions</h3>
            <p>We understand your unique vision and deliver customized visual content that aligns with your goals.</p>
          </div>

          <div className="about-reason-item">
            <img src="https://cdn-icons-gif.flaticon.com/11324/11324208.gif" alt="Timely Delivery" />
            <h3>Timely Delivery</h3>
            <p>We respect your deadlines and ensure every project is delivered on time without compromising quality.</p>
          </div>
          <div className="about-reason-item">
            <img src="/img/discount.gif" alt="Affordable Services" />
            <h3>Affordable Services</h3>
            <p>Premium 3D visualization solutions that fit your budget.</p>
          </div>
        </div>





      </div>


      <div className="about-sec4">
        <section class="commitment-section">
          <div class="container">
            <div class="content">
              <h2 class="section-title">Our Commitment</h2>
              <p class="section-description">
                We believe in building lasting relationships with our clients through dedication, innovation, and a deep understanding of their needs. At <span class="brand-name">Rangrag Studio</span>, every project is an opportunity to exceed expectations and showcase the power of visual storytelling.
              </p>
            </div>
            <div class="image">
              <img src="/img/commitment.gif" alt="Visual Storytelling" />
            </div>
          </div>
        </section>

      </div>

      <div className="about-sec5">

        <section class="create-together-section">
          <div class="container">
            <div class="image">
              <img src="/img/3d-model.gif" alt="Exceptional 3D Visualization" />
            </div>

            <div class="content">
              <h2 class="section-title">Let’s Create Together</h2>
              <p class="section-description">
                Whether you’re an architect, interior designer, or real estate developer, we’re here to help you elevate your projects with exceptional 3D visualization.
              </p>
              <p class="cta-text">Contact us today to turn your vision into reality!</p>
              <Link to='/contactUs' className='cta-button'>Contact Us</Link>
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
              <li> <Link to='/contactUs'>ContactUs</Link></li>

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
