import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import devtools from 'devtools-detect';

export default function Contact() {


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


  //form submit action
  const on_Submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ed05c196-bdbd-4c64-8967-892f4da9969f");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      alert(res.message);
    }
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
          <Link to='/aboutUs'>About us</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contactUs' style={{ color: 'green', fontWeight: 'bold' }}>Contact us</Link>
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


      <div className="contact-us-form">

        <div className="form-container">

          <div className="form-1">
            <h1>Get <span style={{ color: 'rgb(217, 156, 24)', fontWeight: 'bolder' }}>Personalised</span> interior designs <br /> With Professional excution </h1>
            <div className="lamp">
              <img src="/img/form-lamp.png" alt="" />
            </div>
          </div>

          <form className="form-2" onSubmit={on_Submit} >
            <input type="text" name="name" placeholder="Enter Name" required />
            <input type="email" name="email" placeholder="Enter Email" required />
            <div className="num">
              <input type="tel" name="phone" placeholder="Enter Mobile No" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button className="submit" type="submit">SUBMIT</button>
          </form>

          <div className="form-chair">
            <img src="/img/form-chair.png" alt="" />
          </div>

        </div>

      </div>


      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.609266615526!2d70.7816749!3d22.2548992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaad189cf9fff7a4f%3A0xa3be532289de4b9c!2sRangrag%20Studio%20%7C%20Interior%20%26%20Architectural%203D%20Visualization%20%26%20VR%20Services%20%7C%203D%20Modeling%2C%20Rendering%20%26%20Virtual%20Reality!5e0!3m2!1sen!2sin!4v1735451228353!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
