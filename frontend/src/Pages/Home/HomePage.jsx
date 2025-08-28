import React from 'react';
import Navbar from '../../components/common/Navbar';
import HeroSection from '../../components/home/HeroSection';
import BookSection from '../../components/home/BookSection'; 
import AuthorSection from '../../components/home/AuthorSection';
import './HomePage.css'; 

// --- DUMMY DATA ---
const heroSlidesData = [
    { id: 1, image: '/src/assets/Images/hero1.png', alt: 'Islamic Subjects You Should Know' },
    { id: 2, image: '/src/assets/Images/hero2.png', alt: 'Global Leader in Islamic Books' },
    { id: 3, image: '/src/assets/Images/hero3.png', alt: 'Discover a Wide Range of Books' },
];

const childrenBooksData = [
    { id: 1, title: 'Children Books Volume 05', price: 250, image: '/src/assets/Images/Teen1.png' },
    { id: 2, title: 'Children Books Volume 06', price: 300, image: '/src/assets/Images/Teen2.png' },
    { id: 3, title: 'Children Books Volume 07', price: 250, image: '/src/assets/Images/Teen3.png' },
    { id: 4, title: 'Children Books Volume 08', price: 280, image: '/src/assets/Images/Teen1.png' },
    { id: 5, title: 'Children Books Volume 09', price: 320, image: '/src/assets/Images/Teen2.png' },
    { id: 6, title: 'Children Books Volume 10', price: 290, image: '/src/assets/Images/Teen3.png' },
];

const artBooksData = [
    { id: 1, title: 'Art and Photography Volume 05', price: 750, image: '/src/assets/Images/art1.png' },
    { id: 2, title: 'Islamic Heritage Architecture', price: 500, image: '/src/assets/Images/art2.png' },
    { id: 3, title: 'Art and Photography Volume 07', price: 750, image: '/src/assets/Images/art3.png' },
    { id: 4, title: 'Art and Photography Volume 08', price: 650, image: '/src/assets/Images/art1.png' },
    { id: 5, title: 'Calligraphy Masterpieces', price: 800, image: '/src/assets/Images/art2.png' },
    { id: 6, title: 'Modern Islamic Art', price: 720, image: '/src/assets/Images/art3.png' },
];

const featuredAuthorsData = [
    { id: 1, name: 'Dr Zakir Naik', image: '/src/assets/Images/a_dr.png' },
    { id: 2, name: 'Nouman Ali Khan', image: '/src/assets/Images/a_N.png' },
    { id: 3, name: 'Ismail Ibn Musa Menk', image: '/src/assets/Images/a_mufti.png' },
    { id: 4, name: 'Yasmin Mogahed', image: '/src/assets/Images/a-yasmin.png' },
    { id: 5, name: 'Fatima al-Fihri', image: '/src/assets/Images/a-fatima.png' },
    { id: 6, name: 'Assim Al-Hakeem', image: '/src/assets/Images/a_asim.png' },
];
// --- END DUMMY DATA ---

const HomePage = () => {
    return (
        <div className="homepage-container">
            <Navbar />
            <HeroSection slides={heroSlidesData} />

            <main className="home-main-content">
                {/* Now using the revised BookSection component */}
                <BookSection
                    title="Children and Teens"
                    books={childrenBooksData}
                    backgroundImage="/src/assets/Images/children_bg.png" 
                />
                <BookSection
                    title="Art and Photography"
                    books={artBooksData}
                    backgroundImage="/src/assets/Images/bg2.png" /* Make sure this path is correct */
                />
                <AuthorSection
                    title="Featured Author"
                    authors={featuredAuthorsData}
                />
            </main>

            <footer className="home-footer">
                <h3>Follow Us</h3>
                <p>Copyright © 2024. Bookwagon.com. All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default HomePage;




// import React from 'react';
// import Navbar from '../../components/common/Navbar';
// import HeroSection from '../../components/home/HeroSection';
// import BookSection from '../../components/home/BookSection'; 
// import AuthorSection from '../../components/home/AuthorSection';
// import './HomePage.css'; 

// const heroSlidesData = [
//     { id: 1, image: '/src/assets/Images/hero1.png', alt: 'Islamic Subjects You Should Know' },
//     { id: 2, image: '/src/assets/Images/hero2.png', alt: 'Global Leader in Islamic Books' },
//     { id: 3, image: '/src/assets/Images/hero3.png', alt: 'Discover a Wide Range of Books' },
// ];

// const childrenBooksData = [
//     { id: 1, title: 'Children Books Volume 05', price: 250, image: '/children-book1.png' },
//     { id: 2, title: 'Children Books Volume 06', price: 300, image: '/children-book2.png' },
//     { id: 3, title: 'Children Books Volume 07', price: 250, image: '/children-book3.png' },
//     { id: 4, title: 'Children Books Volume 08', price: 280, image: '/children-book4.png' },
//     { id: 5, title: 'Children Books Volume 09', price: 320, image: '/children-book5.png' },
//     { id: 6, title: 'Children Books Volume 10', price: 290, image: '/children-book6.png' },
// ];

// const artBooksData = [
//     { id: 1, title: 'Art and Photography Volume 05', price: 750, image: '/art-book1.png' },
//     { id: 2, title: 'Islamic Heritage Architecture', price: 500, image: '/art-book2.png' },
//     { id: 3, title: 'Art and Photography Volume 07', price: 750, image: '/art-book3.png' },
//     { id: 4, title: 'Art and Photography Volume 08', price: 650, image: '/art-book4.png' },
//     { id: 5, title: 'Calligraphy Masterpieces', price: 800, image: '/art-book5.png' },
//     { id: 6, title: 'Modern Islamic Art', price: 720, image: '/art-book6.png' },
// ];

// const featuredAuthorsData = [
//     { id: 1, name: 'Dr Zakir Naik', image: '/author-zakir.png' },
//     { id: 2, name: 'Nouman Ali Khan', image: '/author-nouman.png' },
//     { id: 3, name: 'Ismail Ibn Musa Menk', image: '/author-mufti.png' },
//     { id: 4, name: 'Yasmin Mogahed', image: '/author-yasmin.png' },
//     { id: 5, name: 'Fatima al-Fihri', image: '/author-fatima.png' },
//     { id: 6, name: 'Assim Al-Hakeem', image: '/author-assim.png' },
// ];
// // --- END DUMMY DATA ---

// const HomePage = () => {
//     return (
//         <div className="homepage-container">
//             <Navbar /> {/* Our main navigation */}
//             <HeroSection slides={heroSlidesData} /> {/* The auto-scrolling banner and search */}

//             <main className="home-main-content">
//                 <BookSection
//                     title="Children and Teens"
//                     books={childrenBooksData}
//                     backgroundImage="/src/assets/Images/children_bg.png"
//                 />
//                 <BookSection
//                     title="Art and Photography"
//                     books={artBooksData}
//                     backgroundImage="/art-bg.png"
//                 />
//                 <AuthorSection
//                     title="Featured Author"
//                     authors={featuredAuthorsData}
//                 />
//             </main>

//             <footer className="home-footer">
//                 <h3>Follow Us</h3>
//                 <p>Copyright © 2024. Bookwagon.com. All Rights Reserved</p>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;