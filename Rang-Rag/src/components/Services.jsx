import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import devtools from 'devtools-detect';


export default function Services() {


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

  const [selectedService, setSelectedService] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      id: 1,
      name: "Living Room Design",
      description: "Transform your living room with our modern and cozy design solutions.",
      image: "/img/52.jpg",
    },
    {
      id: 2,
      name: "Kitchen Remodeling",
      description: "Upgrade your kitchen with a sleek, functional, and stylish design.",
      image: "/img/9-1.jpg",
    },
    {
      id: 3,
      name: "Office Space Design",
      description: "Boost productivity with our ergonomic and aesthetic office designs.",
      image: "/img/15-1.jpg",
    },
  ];


  const handleFormToggle = (serviceId) => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      setSelectedService(selectedService === serviceId ? null : serviceId);
      setIsTransitioning(false); // End the transition
    }, 300); // Duration matches CSS animation
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Your request has been submitted!");
  //   setSelectedService(null);
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Your custom form logic
    alert("Your request has been submitted!");

    // Set selected service to null if needed
    setSelectedService(null);

    // Perform API submission
    const formData = new FormData(e.target);
    formData.append("access_key", "c6f175ac-d9ae-482f-9e83-44f7a9cbf513");
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




  //slider
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    { id: 1, className: "one" },
    { id: 2, className: "two" },
    { id: 3, className: "three" },
    { id: 4, className: "four" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);


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
          <Link to='/services' style={{ color: 'green', fontWeight: 'bold' }}>Services</Link>
          <Link to='/aboutUs'>About us</Link>
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

      <div className="slider sec1">

        <div className={`slide one ${currentIndex === 0 ? "active animate__animated wow animate__fadeInUp" : ""}`} >

          <h2 className='slide_heading'>Elegant Living Room Design</h2>

          <div className="one_of_one animate_animated wow animate__backInLeft">

            <div className="des_1">
              <p>Transform your living room with elegance and sophistication.</p>

              <p className="slide_description">
                This living room features plush seating, ambient lighting, and a refined color <br /> palette that creates a perfect blend of comfort and luxury.
              </p>
            </div>

            <div className='feature animate__animated wow animate__zoomInRight'>
              {/* Add Features */}
              <ul className="slide_features">
                <li><i className="fa-solid fa-couch"></i> Luxurious Furniture</li>
                <li><i className="fa-solid fa-lightbulb"></i> Ambient Lighting</li>
                <li><i className="fa-solid fa-tree"></i> Eco-Friendly Materials</li>
                <li><i className="fa-solid fa-paint-roller"></i> Customizable Colors</li>
              </ul>

              {/* Add Call-to-Action Buttons */}
              <div className="slide_cta">
                <button className="btn_primary">Explore More</button>
                <button className="btn_secondary">Contact Designer</button>
              </div>
            </div>

          </div>


        </div>


        <div className={`slide two ${currentIndex === 1 ? "active animate__animated wow animate__fadeInUp" : ""}`}>

          <h2 className='slide_heading'>Modern Bedroom Style</h2>

          <div className="one_of_one animate_animated wow animate__backInLeft">

            <div className="des_1">
              <p>Create a cozy and modern retreat in your bedroom.</p>

              <p className="slide_description">
                This bedroom design emphasizes comfort and simplicity <br /> with sleek furniture and a calming color scheme.
              </p>
            </div>

            <div className='feature animate__animated wow animate__zoomInRight'>
              <ul className="slide_features">
                <li><i className="fa-solid fa-bed"></i> Comfortable Bed</li>
                <li><i className="fa-solid fa-lamp"></i> Soft Lighting</li>
                <li><i className="fa-solid fa-draw-polygon"></i> Modern Furniture</li>
                <li><i className="fa-solid fa-brush"></i> Neutral Color Tones</li>
              </ul>

              <div className="slide_cta">
                <button className="btn_primary">Explore More</button>
                <button className="btn_secondary">Contact Designer</button>
              </div>
            </div>
          </div>

        </div>


        <div className={`slide three ${currentIndex === 2 ? "active animate__animated wow animate__fadeInUp" : ""}`}>
          <h2 className='slide_heading'>Minimalistic Kitchen</h2>

          <div className="one_of_one">
            <div className="des_1">
              <p>Design a functional and minimalistic kitchen space.</p>
              <p className="slide_description">
                This kitchen features clean lines, efficient storage solutions, <br /> and modern appliances for a sleek, clutter-free look.
              </p>
            </div>

            <div className='feature'>
              <ul className="slide_features">
                <li><i className="fa-solid fa-utensils"></i> Modern Appliances</li>
                <li><i className="fa-solid fa-archive"></i> Smart Storage</li>
                <li><i className="fa-solid fa-sink"></i> Spacious Countertops</li>
                <li><i className="fa-solid fa-border-all"></i> Minimalist Design</li>
              </ul>

              <div className="slide_cta">
                <button className="btn_primary">Explore More</button>
                <button className="btn_secondary">Contact Designer</button>
              </div>
            </div>
          </div>
        </div>


        <div className={`slide four ${currentIndex === 3 ? "active animate__animated wow animate__fadeInUp" : ""}`}>
          <h2 className='slide_heading'>Luxury Bathroom Decor</h2>

          <div className="one_of_one animate__animated wow animate__backInLeft">
            <div className="des_1">
              <p>Experience luxury with our curated bathroom decor ideas.</p>
              <p className="slide_description">
                Indulge in a serene bathroom ambiance with premium fixtures, <br /> soothing lighting, and elegant design elements.
              </p>
            </div>

            <div className='feature animate__animated wow animate__zoomInRight'>
              <ul className="slide_features">
                <li><i className="fa-solid fa-shower"></i> Rainfall Showers</li>
                <li><i className="fa-solid fa-bath"></i> Freestanding Bathtubs</li>
                <li><i className="fa-solid fa-lightbulb"></i> Ambient Lighting</li>
                <li><i className="fa-solid fa-border-style"></i> Designer Tiles</li>
              </ul>

              <div className="slide_cta">
                <button className="btn_primary">Explore More</button>
                <button className="btn_secondary">Contact Designer</button>
              </div>
            </div>
          </div>
        </div>


      </div>


      <div className="service-sec2">

        <div className="service-card">

          <h2 className="tagline">
            Transform Your Space with Tailored Elegance
          </h2>
          <p className="description">
            Our expert designers bring your dream interiors to life by blending aesthetics with functionality. Whether you’re looking to redesign a cozy corner or revamp an entire home, we provide end-to-end solutions that redefine luxury and comfort. Every detail is customized to align with your unique style and preferences.
          </p>

          <div className="feature-section">
            <h3 className="feature-title">Our Key Features</h3>
            <ul className="key-features">
              <li>Personalized design consultation for tailored solutions</li>
              <li>Space optimization and layout planning for maximum efficiency</li>
              <li>Custom furniture and decor to match your unique taste</li>
              <li>Innovative mood boards and immersive 3D visualizations</li>
              <li>Eco-friendly and sustainable design options</li>
            </ul>
          </div>



          <div className="cta-container">
            <button className="cta-button">
              Let’s Create Your Dream Space Today!
            </button>
          </div>

        </div>


        <section className="service-gif"></section>
      </div>


      <div className="service-sec3">

        <div class="service">
          <div class="icon">
            <img src="img/bell-icon.gif" alt="Modern Design" />
          </div>
          <h3>Modern Design</h3>
          <p>Even the all-powerful Pointing has no control over the blind texts. It is almost unorthographic.</p>
        </div>
        <div class="service">
          <div class="icon">
            <img src="img/heart-icon.gif" alt="Build With Love" />
          </div>
          <h3>Build With Love</h3>
          <p>Even the all-powerful Pointing has no control over the blind texts. It is almost unorthographic.</p>
        </div>
        <div class="service">
          <div class="icon">
            <img src="img/clock.gif" alt="Fast Loading" />
          </div>
          <h3>Fast Loading</h3>
          <p>Even the all-powerful Pointing has no control over the blind texts. It is almost unorthographic.</p>
        </div>

      </div>


      <div className="service-sec4">

        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${index % 2 === 0 ? "zigzag-left" : "zigzag-right"
                }`}
            >
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-content">
                <h2 className="service-name">{service.name}</h2>
                <p className="service-description">{service.description}</p>
                <button
                  className="consultation-btn"
                  onClick={() => handleFormToggle(service.id)}
                >
                  {selectedService === service.id ? "Close Form" : "Book Free Consultation"}
                </button>

                {selectedService === service.id && (
                  <div className="dynamic-form fade-in">
                    <h3>Get Personalized Quote for {service.name}</h3>

                    <form onSubmit={handleFormSubmit}>
                      <label>
                        Name:
                        <input type="text" placeholder="Enter your name" required />
                      </label>
                      <label>
                        Email:
                        <input type="email" placeholder="Enter your email" required />
                      </label>
                      <label>
                        Requirements:
                        <textarea placeholder="Describe your requirements" rows="4" required />
                      </label>
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </form>

                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


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
              <li><Link to='/aboutUs'>AboutUs</Link> </li>
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
