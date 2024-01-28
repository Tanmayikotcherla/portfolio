import React from 'react';
import './App.css'; // Import your CSS file
import logo from './img/logo.png'; // Import your logo image

function PortfolioWebsite() {
    return (
        <div>
            <div className="overlay"></div>
            <header>
                <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
                <ul className="navlist">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="right-header">
                    <a href="#" className="btn">Let's chat <i className='bx bx-message-dots'></i></a>
                    <div className="menu-icon">
                        <div className="bar"></div>
                    </div>
                </div>
            </header>

            <section className="home" id="home">
                <div className="hero-info">
                    <h3>Welcome To my World</h3>
                    <h1>Hi, I'm Tanmayi Priya</h1>

                    <div className="text-animate">
                        <h2>Web Developer</h2>
                    </div>

                    <p>I am a student at Kakinada Institute of Engineering and Technology pursuing B.Tech 3rd year in the field of Artificial Intelligence and Data Science.</p>

                    <div className="btn-box">
                        <a href="mailto:richard@mail.com" className="btn">Hire Me Now ! <i className='bx bx-right-arrow-alt'></i></a>
                        <a href="img/resume.pdf" target="_blank" className="btn d-CV">Download CV <i className='bx bx-download'></i></a>
                    </div>

                    <div className="social-media">
                        <div className="bg-icon">
                            <a href="#">
                                <img src="img/insta.png" alt="Instagram" />
                                <i className='bx bxl-instagram'></i>
                            </a>
                            <span></span>
                        </div>

                        <div className="bg-icon">
                            <a href="https://github.com/Tanmayikotcherla">
                                <img src="img/git.png" alt="GitHub" />
                                <i className='bx bxl-github'></i>
                            </a>
                            <span></span>
                        </div>

                        <div className="bg-icon">
                            <a href="https://www.linkedin.com/in/kotcherla-tanmayi-priya-787907268/">
                                <img src="img/lin.png" alt="LinkedIn" />
                                <i className='bx bxl-linkedin'></i>
                            </a>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="img-hero">
                    <img src="img/12830.jpg" alt="Hero" />
                    <div className="rotate-text">
                        <div className="text">
                           
                        </div>
                        <span><i></i></span>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-img">
                    <img src="img/12830.jpg" alt="About Hero" className="aboutHero" />
                    <div className="showcase-ring">
                        <img src="shapes/ring.png" className="ring" alt="Ring" />
                        <img src="shapes/circle.png" className="circle" alt="Circle" />
                    </div>
                </div>
                <div className="about-content">
                    <h3 className="heading">About Me</h3>
                    <p>Delving into the cutting-edge realms of AI and data science at Kakinada Institute of Engineering and Technology, I am honing my skills to engineer tomorrow's technological breakthroughs.</p>
                    <div className="about-btn">
                        <button className="active">Certifications</button>
                        <button onClick={() => window.location.href="#Awards"}>Awards</button>
                        <button>Education</button>
                    </div>
                    <div className="content-btn">
                        <div className="content">
                            <div className="text-box">
                                <p>User Experience Design - UI / UX</p>
                                <span>Delight the user and make it work.</span>
                            </div>
                            <div className="text-box">
                                <p>Web & User Interface Design - Development</p>
                                <span>Website , Web Experience , ...</span>
                            </div>
                            <div className="text-box">
                                <p>Interaction Desing - Animation</p>
                                <span>I Like to move it move it</span>
                            </div>
                        </div>
                        <div className="Awards">
                            <div className="text-box">
                                <p>Web Design Award</p>
                                <span>Award for creativity and user experience.</span>
                            </div>
                            <div className="text-box">
                                <p>Code and Development Award</p>
                                <span>Exceptional coding skills and develoment techniques</span>
                            </div>
                            <div className="text-box">
                                <p>Hackathons and coding Competiotions</p>
                                <span>Participating in hackathons and coding.</span>
                            </div>
                        </div>
                        <div className="content">
                            <div className="text-box">
                                <p>Online Courses and Bootcamps</p>
                                <span>Delight the user and make it work.</span>
                            </div>
                            <div className="text-box">
                                <p>Internships and Work Experience</p>
                                <span>Website , Web Experience , ...</span>
                            </div>
                            <div className="text-box">
                                <p>Bachelor's Degree in Computer Science</p>
                                <span>I Like to move it move it</span>
                            </div>
                        </div>
                    </div>
                    <div className="cvContent">
                        <a href="img/resume.pdf" target="_blank" className="btn d-CV">Download CV <i className='bx bx-download'></i></a>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="main-text">
                    <h2 className="heading">My Services</h2>
                    <span>What I will do for you</span>
                </div>
                <div className="allServices">
                <div className="servicesItem">
                        <div className="icon-services">
                            
                            
                        </div>
                        <h3>React Developer</h3>
                        <p>With a keen focus on front-end development, I leverages React.js to build responsive, 
                            interactive web applications, adept at creating intuitive user interfaces and enhancing user experiences.</p>
                        <a href="#" className="readMore">Read More</a>
                    </div>

                    <div className="servicesItem">
                        <div className="icon-services">
                            
                            
                        </div>
                        <h3>Web Development</h3>
                         <p>I delves into web development, crafting dynamic digital experiences with her expertise in HTML, CSS, and JavaScript,
                            ensuring seamless user interactions and visually stunning interfaces</p>                        
                        <a href="#" className="readMore">Read More</a>
                    </div>

                    <div className="servicesItem">
                        <div className="icon-services">
                            
                        </div>
                        <h3>SQL</h3>
                        <p>Basic in SQL, Inavigates databases with precision, adeptly querying and managing data to extract valuable insights, 
                            ensuring efficient data storage and retrieval for informed decision-making</p>
                        <a href="#" className="readMore">Read More</a>
                    </div>

                    <div className="servicesItem">
                        <div className="icon-services">
                            
                        </div>
                        <h3>Python</h3>
                        <p> I harnesses the power of Python, wielding its versatility and simplicity to develop robust applications, 
                            automate processes, and analyze data, paving the way for innovative solutions and streamlined workflows.</p>
                        <a href="#" className="readMore">Read More</a>
                    </div>
                </div>
                <div className="proposal">
                    <div className="text-box">
                        <span>Get In Touch</span>
                        <h3>Have a Project On Your Mind</h3>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                    <img src="img/support.png" className="first" alt="Support" />
                </div>
                <div className="showcase">
                <img src="shapes/ring.png" className="ring" alt="ring" />
                    <img src="shapes/circle.png" className="circle" alt="circle" />
                    <img src="shapes/circle.png" className="circle2" alt="circle2" />
                    <img src="shapes/circle.png" className="circle3" alt="circle3" />
                    <img src="shapes/half-ring.png" className="half-ring" alt="half-ring" />
                </div>
            </section>

            <section className="portfolio" id="portfolio">
                <div className="main-text">
                    <h2 className="heading">My Portfolio</h2>
                    <span>Explore my work</span>
                </div>
                <div className="fillter-buttons">
                    <button className="button mixitup-control-active" data-filter="all">Restaurent</button>
                    <button className="button" data-filter=".web">Data Visualisation</button>
                    <button className="button" data-filter=".uiux">Doctor Appointment.</button>
                    
                </div>
                <div className="portfolio-gallery">
                <div className="portfolio-box mix uiux">
                        <div className="portfolio-content">
                            <h3>Restaurent</h3>
                            <p>Dynamic Menu Display: The app dynamically renders a restaurant menu, allowing users to browse through available items.</p>
                            <a href="#" className="readMore">Explore More</a>
                        </div>
                        <div className="portfolio-img">
                            <img src="img/portfolio/1.jpg" alt="" />
                        </div>
                    </div>

                    <div className="portfolio-box mix web">
                        <div className="portfolio-content">
                            <h3>Data Visulization</h3>
                            <p> Insightful Data Representation: Data visualization transforms complex information into intuitive charts, graphs, and diagrams,
                                 aiding in the comprehension and interpretation of datasets.</p>
                        </div>
                        <div className="portfolio-img">
                            <img src="img/portfolio/2.jpg" alt="" />
                        </div>
                    </div>

                    <div className="portfolio-box mix web">
                        <div className="portfolio-content">
                            <h3>Doctor Appointment</h3>
                            <p>Appointment Booking System: A Flask-based application that allows patients to schedule appointments with doctors,
                                 managing the booking process efficiently.</p>
                        </div>
                        <div className="portfolio-img">
                            <img src="img/portfolio/3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="down-box" id="contact">
                <div className="contactSkills">
                    <div className="contact-info">
                        <div className="main-text">
                            <h2 className="heading">Contact Me</h2>
                            <span>Get in touch with me</span>
                        </div>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea name="#" id="" cols="30" rows="10"></textarea>
                            <div className="formBtn">
                                <button type="submit" className="btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                    </div>
            </section>
        </div>
    );
}

export default PortfolioWebsite;