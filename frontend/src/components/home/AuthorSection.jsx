import React from 'react';
import AuthorCard from './AuthorCard'; // Use our AuthorCard component
import './AuthorSection.css';

const AuthorSection = ({ title, authors }) => {
    return (
        <section className="author-section">
            <h2 className="section-title">{title}</h2>
            <div className="horizontal-scroll-container"> {/* Reusing the scroll style */}
                {authors.map(author => (
                    <AuthorCard
                        key={author.id}
                        image={author.image}
                        name={author.name}
                    />
                ))}
            </div>
        </section>
    );
};

export default AuthorSection;