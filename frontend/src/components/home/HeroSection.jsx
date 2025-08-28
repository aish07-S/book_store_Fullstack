// client/src/components/home/HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import { FaSearch } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = ({ slides }) => {
    const sliderSettings = {
        dots: false,         // No dots as per design
        infinite: true,      // Loop the slider
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Show one slide at a time
        slidesToScroll: 1,   // Scroll one slide at a time
        autoplay: true,      // Enable auto-play
        autoplaySpeed: 3000, // 3 seconds delay
        fade: true,          // Use a fade transition
        cssEase: 'linear',
        arrows: false        // No arrows for the hero slider
    };

    return (
        <div className="hero-container">
            {/* The slider component for auto-scrolling background images */}
            <Slider {...sliderSettings} className="hero-slider-background">
                {slides.map(slide => (
                    <div key={slide.id}>
                        <img src={slide.image} alt={slide.alt} className="hero-slide-image" />
                    </div>
                ))}
            </Slider>

            {/* This content will be absolutely positioned OVER the slider,
                and now ONLY contains the search bar. */}
            <div className="hero-overlay-content">
                <div className="search-bar-container">
                    <input type="text" placeholder="Find Book" className="search-input" />
                    <button className="search-button"><FaSearch /> Search</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;





// import React from 'react';
// import Slider from 'react-slick';
// import { FaSearch } from 'react-icons/fa';
// import './HeroSection.css';

// const HeroSection = ({ slides }) => {
//     const sliderSettings = {
//         dots: false,         // No dots as per design
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000, // 3 seconds delay
//         fade: true,
//         cssEase: 'linear',
//         arrows: false // No arrows for the hero slider
//     };

//     return (
//         <div className="hero-container">
//             <Slider {...sliderSettings} className="hero-slider">
//                 {slides.map(slide => (
//                     <div key={slide.id}>
//                         <img src={slide.image} alt={slide.alt} className="hero-slide-image" />
//                     </div>
//                 ))}
//             </Slider>

//             <div className="hero-overlay-content">
//                 <h1 className="hero-title">Islamic Subjects You Should Know</h1>
//                 <p className="hero-subtitle">A Global Leader in Islamic Books</p>
//                 <div className="search-bar-container">
//                     <input type="text" placeholder="Find Book" className="search-input" />
//                     <button className="search-button"><FaSearch /> Search</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;