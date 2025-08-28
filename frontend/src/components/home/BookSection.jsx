import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import ProductCard from './ProductCard'; // Use our ProductCard component
import CustomArrow from '../common/CustomArrow'; // Use our custom arrows
import './BookSection.css'; // Dedicated CSS for this section

const BookSection = ({ title, books, backgroundImage }) => {
    // Style object for the entire section's background image
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    // Settings for the react-slick Slider
    const sliderSettings = {
        dots: false,         // No dots as per design
        infinite: false,     // Don't loop (arrows will disable at ends)
        speed: 500,
        slidesToShow: 5,     // Show 5 cards at a time on desktop
        slidesToScroll: 2,   // Scroll 2 cards at a time
        nextArrow: <CustomArrow />, // Custom next arrow
        prevArrow: <CustomArrow />, // Custom previous arrow
        responsive: [        // Responsive settings for different screen sizes
            {
                breakpoint: 1200, // For smaller desktops/large tablets
                settings: { slidesToShow: 4, slidesToScroll: 2 }
            },
            {
                breakpoint: 992, // For tablets
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 768, // For mobile phones
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480, // For very small mobile phones
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <section className="book-section" style={sectionStyle}>
            {/* Overlay for text readability over the background image */}
            <div className="background-overlay"></div>
            
            {/* Content Wrapper for title and slider, sits on top of overlay */}
            <div className="book-section-content-wrapper">
                <h2 className="section-title">{title}</h2>
                
                {/* The Slider component for horizontal scrolling cards */}
                <div className="book-cards-slider-container">
                    <Slider {...sliderSettings}>
                        {books.map(book => (
                            <ProductCard
                                key={book.id}
                                image={book.image}
                                title={book.title}
                                price={book.price}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BookSection;