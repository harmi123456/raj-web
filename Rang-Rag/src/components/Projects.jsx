import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import { useSwipeable } from "react-swipeable";
import devtools from 'devtools-detect';

export default function Projects() {


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


  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSection_2, setSelectedSection_2] = useState(null);

  //first

  const sections = {
    "Ground Floor - Dining Table": {
      description: "This is the Dining Table area on the ground floor.",
      image: "/img/Scene 4_1.jpg",
    },
    "Ground Floor - Living Room": {
      description: "This is the Living Room area on the ground floor.",
      image: "/img/14-1-1.jpg",
    },
    "Living Room - Television": {
      description: "This is the Television area in the living room.",
      image: "/img/87.jpg",
    },


    "First Floor - Bedroom": {
      description: "This is the bedroom on the first floor.",
      image: "/residential/Scene 21.jpg",
    },
    "First Floor - Washroom": {
      description: "This is the washroom on the first floor.",
      image: "/residential/Scene 15(1).jpg",
    },
    "First Floor - Theater": {
      description: "This is the theater area on the first floor.",
      image: "/img/theater_1.jpg",
    },
    "First Floor - Chill Time": {
      description: "This is the extra space with chairs for seating.",
      image: "/img/15.jpg",
    },


    "Second Floor - Terrace": {
      description: "This is the terrace area on the second floor.",
      image: "/residential/b3.jpg",
    },
    "Master Bedroom": {
      "description": "This is the master bedroom with a cozy design and elegant furniture.",
      "image": "/img/18-1.jpg"
    },
    "Dressing Area": {
      "description": "This is the dressing area with ample space and modern amenities.",
      "image": "/img/27-1.jpg"
    }

  };


  const handleHotspotClick = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection(sectionName);
  };

  const closePopup = () => {
    setSelectedSection(null);
    document.body.classList.remove("no-scroll");
  };



  useEffect(() => {
    if (selectedSection) {
      document.body.classList.add("no-scroll");

      // Add scroll lock and alert detection
      const handleScroll = (e) => {
        e.preventDefault();
        alert("Please close the popup before scrolling!");
      };

      window.addEventListener("scroll", handleScroll, { passive: false });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedSection]);

  //second

  const sections_2 = {
    "Terrace": {
      description: "This is the terrace area with a relaxing vibe and a great view.",
      image: "/img/terrace.jpg",
    },
    "Kitchen": {
      description: "This is the kitchen with modern amenities and a spacious layout.",
      image: "/residential/Scene 8(1).jpg",
    },
    "Dining Table": {
      description: "This is the dining table area, perfect for family meals and gatherings.",
      image: "/residential/Scene 4_1.jpg",
    },
    "Leaving Room": {
      description: "This is the hall, designed for leisure and entertainment.",
      image: "/residential/Scene 2.jpg",
    },
    "Bed Room": {
      description: "This is the bedroom, offering a cozy and tranquil ambiance.",
      image: "/residential/Scene 22.jpg",
    },
    "Dressing Room": {
      description: "This is the dressing room, equipped with stylish storage and mirrors.",
      image: "/residential/Scene 30(1).jpg",
    },
    "Bathroom": {
      description: "This is the bathroom, featuring a sleek and functional design.",
      image: "/img/46.jpg",
    },
    "Exterior": {
      description: "This is the exterior area, showcasing the architectural beauty of the home.",
      image: "/img/Scene 9_3.jpg",
    },
    "Master Bedroom": {
      description: "This is the master bedroom with a cozy design and elegant furniture.",
      image: "/img/18-1.jpg",
    },
    "Swimming Pool": {
      description: "This is the swimming pool area, perfect for relaxation and recreation.",
      image: "/img/Scene 10_4.png",
    }
  };



  const handleHotspotClick_2 = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection_2(sectionName);
  };

  const closePopup_2 = () => {
    setSelectedSection_2(null);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    if (selectedSection_2) {
      document.body.classList.add("no-scroll");

      // Add scroll lock and alert detection
      const handleScroll = (e) => {
        e.preventDefault();
        alert("Please close the popup before scrolling!");
      };

      window.addEventListener("scroll", handleScroll, { passive: false });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedSection_2]);



  //project explore

  const designCategories = [
    { type: 'Exterior_Design', image: '/img/Scene 2.jpg' },
    { type: 'Corporate', image: '/img/6-1.jpg' },
    { type: 'Residential', image: '/img/6-1-1.jpg' },
  ];


  const [showDiv, setShowDiv] = useState(false);
  const [currentData, setCurrentData] = useState([]);


  const handleExploreClick = (type) => {
    let selectedData = [];
    switch (type) {
      case 'Exterior_Design':
        selectedData = Exterior_Design;
        break;
      case 'Corporate':
        selectedData = Corporate;
        break;
      case 'Residential':
        selectedData = Residential;
        break;
      default:
        setCurrentData([]);
    }

    setTimeout(() => {
      setCurrentData(selectedData);
      setShowDiv(selectedData.length > 0);
    }, 0);
  };

  const handleCloseClick = () => {
    setShowDiv(false);
  };




  const Exterior_Design = [
    {
      id: 1,
      image: '/img/Scene 1_2.jpg',
    },
    {
      id: 2,
      image: '/img/Scene 2_2.jpg',
    },
    {
      id: 3,
      image: '/img/Scene 3_3(1).jpg',
    },
    {
      id: 4,
      image: '/img/Scene 4_3(1).jpg',
    },
    {
      id: 5,
      image: '/img/Scene 5_2.jpg',
    },
    {
      id: 6,
      image: '/img/Scene 6_3.jpg',
    },
    {
      id: 7,
      image: '/img/ex_2.jpg',
    },
    {
      id: 8,
      image: '/img/Scene 8_3.jpg',
    },
    {
      id: 9,
      image: '/img/Scene 9_3.jpg',
    },
    {
      id: 10,
      image: '/img/Scene 10_4.jpg',
    },
    {
      id: 11,
      image: '/img/Scene 11_1.jpg',
    },
    {
      id: 12,
      image: '/img/Scene 12_1.jpg',
    },
    {
      id: 13,
      image: '/img/Scene 1_2.jpg',
    },
    {
      id: 14,
      image: '/img/Scene 7_3.jpg',
    },
    {
      id: 15,
      image: '/img/Scene 12_1.jpg',
    },
    {
      id: 16,
      image: '/img/Scene 1_1.jpg',
    },
    {
      id: 17,
      image: '/img/Scene 7.jpg',
    },
    {
      id: 18,
      image: '/img/Scene 2.jpg',
    },
    {
      id: 19,
      image: '/img/Scene 8.jpg',
    },
    {
      id: 20,
      image: '/img/Scene 3.jpg',
    },
    {
      id: 21,
      image: '/img/Scene 9.jpg',
    },
    {
      id: 22,
      image: '/img/Scene 10.jpg',
    },
    {
      id: 23,
      image: '/img/Scene 4.jpg',
    },
    {
      id: 24,
      image: '/img/Scene 2_2.jpg',
    },
    {
      id: 25,
      image: '/img/Scene 4_3(1).jpg',
    },

  ];


  const Residential = [
    {
      id: 1,
      image: '/residential/2.jpg',
    },
    {
      id: 2,
      image: '/img/1-1.jpg',
    },
    {
      id: 3,
      image: '/img/2.1.jpg',
    },
    {
      id: 4,
      image: '/img/2.jpg',
    },
    {
      id: 5,
      image: '/residential/3.jpg',
    },
    {
      id: 6,
      image: '/residential/Scene 8(1).jpg',
    },
    {
      id: 7,
      image: '/img/3.jpg',
    },
    {
      id: 8,
      image: '/img/3-1.jpg',
    },
    {
      id: 9,
      image: '/img/4.jpg',
    },
    {
      id: 10,
      image: '/img/4-1.jpg',
    },
    {
      id: 11,
      image: '/residential/Image_3.jpg',
    },
    {
      id: 12,
      image: '/residential/Scene 2.jpg',
    },
    {
      id: 13,
      image: '/residential/Scene 3_2.jpg',
    },
    {
      id: 14,
      image: '/residential/Scene 7(1).jpg',
    },
    {
      id: 15,
      image: '/img/7-1.jpg',
    },
    {
      id: 16,
      image: '/img/8-1.jpg',
    },
    {
      id: 17,
      image: '/residential/Scene 25(1).jpg',
    },
    {
      id: 18,
      image: '/img/8.jpg',
    },
    {
      id: 19,
      image: '/img/9-1.jpg',
    },
    {
      id: 20,
      image: '/img/13.jpg',
    },
    {
      id: 21,
      image: '/img/14-1.jpg',
    },
    {
      id: 22,
      image: '/img/14-1-1.jpg',
    },
    {
      id: 23,
      image: '/img/15-1-1.jpg',
    },
    {
      id: 24,
      image: '/img/22.jpg',
    },
    {
      id: 25,
      image: '/residential/GUEST2.jpg',
    },
    {
      id: 24,
      image: '/residential/4.jpg',
    },
    {
      id: 25,
      image: '/residential/Scene 4_1.jpg',
    },
  ];


  const Corporate = [
    {
      id: 1,
      image: '/residential/10.jpg',
    },
    {
      id: 2,
      image: '/residential/11.jpg',
    },
    {
      id: 3,
      image: '/corporate/1.jpg',
    },
    {
      id: 4,
      image: '/corporate/2.jpg',
    },
    {
      id: 5,
      image: '/corporate/3.jpg',
    },
    {
      id: 6,
      image: '/corporate/4.2.2.jpg',
    },
    {
      id: 7,
      image: '/corporate/5.jpg',
    },
    {
      id: 8,
      image: '/corporate/13.jpg',
    },
    {
      id: 9,
      image: '/corporate/15.jpg',
    },
    {
      id: 10,
      image: '/corporate/c1.jpg',
    },
    {
      id: 11,
      image: '/corporate/r-1.jpg',
    },
    {
      id: 12,
      image: '/corporate/r-2.jpg',
    },
    {
      id: 13,
      image: '/corporate/r-4.jpg',
    },
    {
      id: 14,
      image: '/corporate/r-8.jpg',
    },
    {
      id: 15,
      image: '/corporate/r-11.jpg',
    },
    {
      id: 16,
      image: '/corporate/r-12.jpg',
    },
    {
      id: 17,
      image: '/corporate/1-1.jpg',
    },
    {
      id: 18,
      image: '/corporate/2-1.jpg',
    },
    {
      id: 19,
      image: '/corporate/3-1.jpg',
    },
    {
      id: 20,
      image: '/corporate/4-1.jpg',
    },
    {
      id: 21,
      image: '/corporate/5-1.jpg',
    },
    {
      id: 22,
      image: '/corporate/6-1.jpg',
    },


  ];



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


  //project-sec-1


  const folders = {

    AhmedabadHaven: {
      images: [
        "/residential/pr-1-2bhk.png",
        "/residential/pr-2-2bhk.png",
        "/residential/pr-3-2bhk.png",
        "/residential/pr-4-2bhk.png",
        "/residential/pr-5-2bhk.png",
        "/residential/pr-6-2bhk.png",
        "/residential/pr-7-2bhk.png",
        "/residential/pr-8-2bhk.png",
      ],
      folderImage: "/residential/pr-3-2bhk.png",

    },

    AMD_DreamSpace: {
      images: [
        "/residential/pr-1-3bhk.png",
        "/residential/pr-2-3bhk.png",
        "/residential/pr-3-3bhk.png",
        "/residential/pr-4-3bhk.png",
        "/residential/pr-5-3bhk.png",
        "/residential/pr-6-3bhk.png",
        "/residential/pr-7-3bhk.png",
        "/residential/pr-8-3bhk.png",
        "/residential/pr-9-3bhk.png",
        "/residential/pr-10-3bhk.png",
        "/residential/pr-11-3bhk.png",
        "/residential/pr-12-3bhk.png",
        "/residential/pr-13-3bhk.png",
        "/residential/pr-14-3bhk.png",
        "/residential/pr-15-3bhk.png",
        "/residential/pr-16-3bhk.png",
      ],
      folderImage: "/residential/pr-4-3bhk.png",
    },

    Bar: {
      images: [
        "/residential/pr-bar-1 (1).png",
        "/residential/pr-bar-1 (2).png",
        "/residential/pr-bar-1 (3).png",
        "/residential/pr-bar-1 (4).png",
        "/residential/pr-bar-1 (5).png",
        "/residential/pr-bar-1 (6).png",
        "/residential/pr-bar-1 (7).png",
        "/residential/pr-bar-1 (8).png",

      ],
      folderImage: "/residential/pr-bar-1 (7).png"
    },

    VadodaraBizNest: {
      images: [
        "/corporate/r-1.jpg",
        "/corporate/r-2.jpg",
        "/corporate/r-5.jpg",
        "/corporate/r-7.jpg",
        "/corporate/r-8.jpg",
        "/corporate/r-11.jpg",
        "/corporate/r-13.jpg",
        "/corporate/r-14.jpg",
        "/corporate/r-3.jpg",
      ],
      folderImage: "/corporate/1.jpg",
    },

    RentGuruz: {
      images: [
        "/corporate/15.jpg",
        "/corporate/c1.jpg",
        "/corporate/C2.jpg",
        "/corporate/14.jpg",
        "/corporate/13.jpg",
        "/corporate/6.jpg",
      ],
      folderImage: "/corporate/6.jpg",
    },


    "Patan Prime Homes": {
      images: [
        "/patan/2.png",
        "/patan/3.png",
        "/patan/4.png",
        "/patan/5.png",
        "/patan/6.png",
        "/patan/7.png",
        "/patan/8.png",
        "/patan/9.png",
        "/patan/10.png",
        "/patan/11.png",
      ],
      folderImage: "/patan/1.png",
    },


    HavenX: {
      images: [
        "/home/1.png",
        "/home/2.png",
        "/home/3.png",
        "/home/4.png",
        "/home/5.png",
        "/home/6.png",
        "/home/7.png",
        "/home/8.png",
        "/home/9.png",
        "/home/10.png",
        "/home/11.png",
      ],
      folderImage: "/home/6.png",
    },


    ZenNest: {
      images: [
        "/home2/1.png",
        "/home2/3.png",
        "/home2/4.png",
        "/home2/5.png",
        "/home2/6.png",
        "/home2/7.png",
        "/home2/8.png",
        "/home2/9.png",
        "/home2/10.png",
        "/home2/11.png",
        "/home2/12.png",
        "/home2/13.png",
        "/home2/14.png",
        "/home2/15.png",
        "/home2/16.png",
      ],
      folderImage: "/home2/2.png",
    },



    "Heritage Home": {
      images: [
        "/rajsthan/1.png",
        "/rajsthan/2.png",
        "/rajsthan/3.png",
        "/rajsthan/4.png",
        "/rajsthan/5.png",
        "/rajsthan/6.png",
        "/rajsthan/14.png",
        "/rajsthan/15.png",
        "/rajsthan/c1.png",
        "/rajsthan/7.png",
        "/rajsthan/8.png",
        "/rajsthan/9.png",
        "/rajsthan/10.png",
      ],
      folderImage: "/rajsthan/5.png",
    },

    SuratHub: {
      images: [
        "/corporate/1-1.jpg",
        "/corporate/2-1.jpg",
        "/corporate/6-1.jpg",
        "/corporate/7-1.jpg",
        "/corporate/8-1.jpg",
        "/corporate/9-1.jpg",
      ],
      folderImage: "/corporate/1.jpg",
    },


    Homix: {
      images: [
        "/home2/a13.png",
        "/home2/b2.png",
        "/home2/b3.png",
        "/home2/dr1.png",
        "/home2/dr10.png",
        "/home2/dr1788.png",
        "/home2/gym151.png",
      ],
      folderImage: "/home2/gym151.png",
    },

  };


  const [currentFolder, setCurrentFolder] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentFolderData = folders[currentFolder];

  const openModel = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    window.addEventListener("keydown", handleKeyDown);
  };

  const closeModel = () => {
    setIsOpen(false);
    window.removeEventListener("keydown", handleKeyDown);
  };

  const goToNext = () => {
    if (currentFolderData?.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentFolderData.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrev = () => {
    if (currentFolderData?.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? currentFolderData.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      goToNext();
    } else if (event.key === "ArrowLeft") {
      goToPrev();
    } else if (event.key === "Escape") {
      closeModel();
    }
  };


  // Touch swipe support
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });





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
          <Link to='/projects' style={{ color: 'green', fontWeight: 'bold' }}>Projects</Link>
          <Link to='/services'>Services</Link>
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

      {/* <div className="virtual mt-5 mb-5">

          <div className="tour">
            <img src="/img/museum.png" alt="" />
          </div>
     

          <div className="tour">
            <img src="/img/exterior.png" alt="" />
          </div>

      </div> */}


      <div className="gallery-container">
        {/* Folder view */}
        {!currentFolder && (
          <div className="folder-view">
            {Object.keys(folders).map((folder, index) => (
              <div
                key={index}
                onClick={() => setCurrentFolder(folder)}
                className="folder"
              >
                <img src={folders[folder].folderImage} alt={`${folder} preview`} />
                <p>{folder} <span style={{ color: "grey", fontWeight: "lighter" }}>{folders[folder].images.length} </span> </p>
              </div>
            ))}
          </div>
        )}

        {/* Image view */}
        {currentFolder && (
          <div className="images-view">
            <button className="back-button" onClick={() => setCurrentFolder(null)}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>

            <div className="image-grid">
              {currentFolderData.images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => openModel(index)}
                  className="image-container"
                >
                  <img src={src} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal */}
        {isOpen && currentFolder && (
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModel}
            className="custom-modal"
          >
            <div className="touch-img" {...handlers}>

              <button onClick={closeModel} className="close-model" aria-label="Close">
                ✕
              </button>

              <button onClick={goToPrev} aria-label="Previous" className="arrow-buttons left">
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <img
                src={currentFolderData.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="model-img"
              />

              <button onClick={goToNext} aria-label="Next" className="arrow-buttons right">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>


            {/* //thumbnail */}
            <div className="image-gallery">
              {currentFolderData.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? "active-thumbnail" : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </Modal>
        )}

      </div>


      <div className="project-sec2">

        <h2>Explore the Floor Plan</h2>
        <p>Click on a section to explore details about the design.</p>


        <section className="interactive-floor-plan">


          {/* //first */}

          <div className="interactive-floor-plan">

            <div className="floor-plan-container">
              <img
                src="/img/floor-plan.jpeg"
                alt="Floor Plan"
                className="floor-plan-image"
              />

              {/* Hotspots */}
              <div
                className="hotspot"
                style={{ top: "31%", left: "20%" }}
                onClick={() => handleHotspotClick("Ground Floor - Dining Table")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "53%", left: "22%" }}
                onClick={() => handleHotspotClick("Ground Floor - Living Room")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "65%", left: "22%" }}
                onClick={() => handleHotspotClick("Living Room - Television")}
              ></div>


              <div
                className="hotspot"
                style={{ top: "27%", left: "48%" }}
                onClick={() => handleHotspotClick("First Floor - Bedroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "35%", left: "60%" }}
                onClick={() => handleHotspotClick("First Floor - Washroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "55%", left: "50%" }}
                onClick={() => handleHotspotClick("First Floor - Theater")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "65%", left: "55%" }}
                onClick={() => handleHotspotClick("First Floor - Chill Time")}
              ></div>


              <div
                className="hotspot"
                style={{ top: "65%", left: "75%" }}
                onClick={() => handleHotspotClick("Second Floor - Terrace")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "25%", left: "73%" }}
                onClick={() => handleHotspotClick("Master Bedroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "18%", left: "83%" }}
                onClick={() => handleHotspotClick("Dressing Area")}
              ></div>


            </div>

            {/* Popup */}
            {selectedSection && (
              <div className="popup">
                <button className="close-btn" onClick={closePopup}>
                  ✖
                </button>
                <h3>{selectedSection}</h3>
                <p>{sections[selectedSection].description}</p>
                <img
                  src={sections[selectedSection].image}
                  alt={selectedSection}
                  className="section-image"
                />
              </div>
            )}
          </div>


          {/* //second */}

          <div className="interactive-floor-plan-2">
            <div className="floor-plan-container">
              <img
                src="/img/floorplan-2.jpg"
                alt="Floor Plan"
                className="floor-plan-image"
              />

              {/* Hotspots */}
              <div
                className="hotspot-2"
                style={{ top: "38%", left: "25%" }}
                onClick={() => handleHotspotClick_2("Terrace")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "46%", left: "39%" }}
                onClick={() => handleHotspotClick_2("Kitchen")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "67%", left: "28%" }}
                onClick={() => handleHotspotClick_2("Dining Table")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "72%", left: "44%" }}
                onClick={() => handleHotspotClick_2("Leaving Room")}
              ></div>


              <div
                className="hotspot-2"
                style={{ top: "45%", left: "60%" }}
                onClick={() => handleHotspotClick_2("Bed Room")}
              ></div>

              <div
                className="hotspot-2"
                style={{ top: "55%", left: "65%" }}
                onClick={() => handleHotspotClick_2("Dressing Room")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "65%", left: "62%" }}
                onClick={() => handleHotspotClick_2("Bathroom")}
              ></div>


              <div
                className="hotspot-2"
                style={{ top: "85%", left: "75%" }}
                onClick={() => handleHotspotClick_2("Exterior")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "15%", left: "53%" }}
                onClick={() => handleHotspotClick_2("Swimming Pool")}
              ></div>


            </div>

            {/* Popup */}
            {selectedSection_2 && (
              <div className="popup-2">
                <button className="close-btn" onClick={closePopup_2}>
                  ✖
                </button>
                <h3>{selectedSection_2}</h3>
                <p>{sections_2[selectedSection_2].description}</p>
                <img
                  src={sections_2[selectedSection_2].image}
                  alt={selectedSection_2}
                  className="section-image"
                />
              </div>
            )}


          </div>


        </section>

      </div>


      <div className="project-sec3">
        <video src="/img/clip1.mp4" controls autoPlay loop></video>
      </div>


      <div className="project-sec4">

        <section className="design-types">

          <h2 className="section-title">Explore Our Design Categories</h2>

          <div className="design-grid">
            {designCategories.map((category, index) => (
              <div key={index} className="design-card">
                <img src={category.image} alt={category.type} className="design-image" />
                <div className="design-info">
                  <h3>{category.type}</h3>
                  <p>Experience unique and modern designs for {category.type.toLowerCase()}.</p>
                  <button className="explore-btn" onClick={() => handleExploreClick(category.type)}>Explore {category.type}</button>
                </div>
              </div>
            ))}
          </div>

          <div className={`fade-in-div ${showDiv ? 'visible' : 'hidden'}`}>

            {currentData.length > 0 ? (

              <>
                <button className="close-btn" onClick={handleCloseClick}>
                  ✕
                </button>

                <div className="card-container">

                  {currentData.map((item) => (
                    <div key={item.id} className="card">
                      <img src={item.image} alt={item.name} />
                    </div>
                  ))}

                </div>

              </>

            ) : (
              <p>No items to display</p>
            )}
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
              <li><Link to='/services'>SERVICES</Link></li>
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
