import React from 'react';
import Header from '../../Components/Header/Header';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import './AboutUs.css';

export default function AboutUs() {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            description: "Education technology enthusiast with 10+ years of experience in curriculum development and learning platforms. Sarah founded ElevatEd with a vision to democratize tech education worldwide."
        },
        {
            name: "David Chen",
            role: "Lead Instructor",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            description: "Expert in full-stack development and modern web technologies with over 8 years of teaching experience. David has trained over 5,000 students and contributed to multiple open-source projects."
        },
        {
            name: "Emily Rodriguez",
            role: "Content Director",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            description: "Curriculum development specialist focused on interactive learning experiences. With a Ph.D. in Educational Technology, Emily designs our award-winning course structure and learning pathways."
        },
        {
            name: "Michael Barnes",
            role: "Technical Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            description: "Former senior engineer at Google with expertise in scalable architecture. Michael ensures our platform provides a seamless learning experience while implementing cutting-edge features."
        }
    ];

    const milestones = [
        { year: "2018", event: "ElevatEd founded with just 3 courses and 200 students" },
        { year: "2019", event: "Expanded to 15 courses covering web development fundamentals" },
        { year: "2020", event: "Launched mobile app and reached 10,000 active students" },
        { year: "2021", event: "Introduced interactive coding environment and mentor network" },
        { year: "2022", event: "Partnered with 50+ tech companies for recruitment opportunities" },
        { year: "2023", event: "Reached 100,000 students across 130 countries" },
        { year: "2024", event: "Launched advanced certification programs recognized by industry leaders" }
    ];

    return (
        <main className="all">
            <Header />
            <div className="contentContainer">
                <SideNavigation />
                <div className="aboutContent">
                    <section className="mission-section">
                        <h1>About ElevatEd</h1>
                        <div className="page-banner">
                            <p className="mission-statement">
                                Empowering learners worldwide through accessible, high-quality tech education
                            </p>
                        </div>

                        <div className="mission-details">
                            <div className="mission-card">
                                <h3>Our Mission</h3>
                                <p>To make technology education accessible, engaging, and effective for everyone, regardless of their background or location. We believe that quality tech education should be available to all who seek it.</p>
                            </div>
                            <div className="mission-card">
                                <h3>Our Vision</h3>
                                <p>Creating a world where quality education knows no boundaries. By 2030, we aim to have empowered 1 million individuals with the skills needed to thrive in the digital economy.</p>
                            </div>
                        </div>
                    </section>

                    <section className="story-section">
                        <h2>Our Story</h2>
                        <div className="story-content">
                            <div className="story-text">
                                <p>ElevatEd began in 2018 when our founder, Sarah Johnson, recognized a gap in tech education. Traditional learning institutions weren't keeping pace with rapidly evolving technologies, and many aspiring developers struggled to gain practical, job-ready skills.</p>
                                <p>Starting with just three courses and a passionate team of educators, we've grown into a comprehensive learning platform serving students across 130+ countries. Our commitment to quality, accessibility, and student success remains at the core of everything we do.</p>
                                <p>Today, ElevatEd offers over 50 courses ranging from beginner to advanced levels, with specialized tracks for web development, data science, mobile apps, and more. Our interactive learning approach combines video lessons, hands-on projects, and personalized feedback to ensure students gain practical skills that translate directly to career success.</p>
                            </div>
                            <div className="milestones">
                                <h3>Our Journey</h3>
                                <div className="timeline">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>{milestone.year}</h4>
                                                <p>{milestone.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="values-section">
                        <h2>Our Values</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <i className="fas fa-star"></i>
                                <h3>Excellence</h3>
                                <p>We're committed to delivering the highest quality education. Every course undergoes rigorous review and is regularly updated to reflect industry standards and best practices.</p>
                            </div>
                            <div className="value-card">
                                <i className="fas fa-users"></i>
                                <h3>Community</h3>
                                <p>Learning is a collaborative journey. We foster vibrant communities where students connect, collaborate, and support each other through coding challenges and projects.</p>
                            </div>
                            <div className="value-card">
                                <i className="fas fa-lightbulb"></i>
                                <h3>Innovation</h3>
                                <p>Technology never stands still, and neither do we. We continuously explore new teaching methods, technologies, and tools to provide the most effective learning experience.</p>
                            </div>
                            <div className="value-card">
                                <i className="fas fa-handshake"></i>
                                <h3>Accessibility</h3>
                                <p>We believe education should be accessible to everyone. Our platform supports multiple languages, offers scholarships, and includes features for learners with different needs.</p>
                            </div>
                            <div className="value-card">
                                <i className="fas fa-chart-line"></i>
                                <h3>Growth Mindset</h3>
                                <p>We encourage students to embrace challenges, persist through obstacles, and view effort as the path to mastery. Mistakes become valuable learning opportunities.</p>
                            </div>
                            <div className="value-card">
                                <i className="fas fa-globe"></i>
                                <h3>Global Perspective</h3>
                                <p>Our diverse team and student community bring together perspectives from around the world, enriching the learning experience and preparing students for global careers.</p>
                            </div>
                        </div>
                    </section>

                    <section className="team-section">
                        <h2>Meet Our Team</h2>
                        <p className="team-intro">Our passionate team of educators, technologists, and learning experience designers work together to create the most effective learning journey for our students.</p>
                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card">
                                    <div className="team-image-container">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-info">
                                        <h3>{member.name}</h3>
                                        <p className="role">{member.role}</p>
                                        <p className="description">{member.description}</p>
                                        <div className="social-links">
                                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="testimonials-section">
                        <h2>What Our Students Say</h2>
                        <div className="testimonial-grid">
                            <div className="testimonial-card">
                                <div className="quote-mark">"</div>
                                <p className="testimonial-text">ElevatEd transformed my career. After completing three courses, I landed my first developer position at a tech startup. The hands-on projects made all the difference in building my portfolio.</p>
                                <div className="testimonial-author">
                                    <p className="author-name">James Wilson</p>
                                    <p className="author-role">Front-end Developer</p>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote-mark">"</div>
                                <p className="testimonial-text">As a self-taught programmer, I had knowledge gaps that were holding me back. ElevatEd's structured curriculum helped me fill those gaps and gain confidence in my skills.</p>
                                <div className="testimonial-author">
                                    <p className="author-name">Priya Sharma</p>
                                    <p className="author-role">Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote-mark">"</div>
                                <p className="testimonial-text">The community aspect of ElevatEd is incredible. I've connected with other learners from around the world, and we continue to collaborate on projects even after completing our courses.</p>
                                <div className="testimonial-author">
                                    <p className="author-name">Carlos Mendez</p>
                                    <p className="author-role">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section">
                        <h2>Get In Touch</h2>
                        <div className="contact-container">
                            <div className="contact-info">
                                <div className="contact-method">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@elevated-learning.com</p>
                                        <p>support@elevated-learning.com</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <i className="fas fa-phone"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 (555) 123-4567</p>
                                        <p>Mon-Fri: 9am-5pm EST</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h3>Visit Us</h3>
                                        <p>123 Tech Campus Drive</p>
                                        <p>Boston, MA 02110</p>
                                    </div>
                                </div>
                            </div>
                            <div className="social-container">
                                <h3>Connect With Us</h3>
                                <div className="social-grid">
                                    <a href="#" className="social-item" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-item" aria-label="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-item" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-item" aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="social-item" aria-label="YouTube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="#" className="social-item" aria-label="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}