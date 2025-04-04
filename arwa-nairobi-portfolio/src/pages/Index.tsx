
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Initialize any JavaScript functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
      
      // Close menu when clicking on nav links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const subjectInput = document.getElementById('subject') as HTMLInputElement;
        const messageInput = document.getElementById('message') as HTMLInputElement;
        
        if (nameInput && emailInput && subjectInput && messageInput) {
          const name = nameInput.value;
          const email = emailInput.value;
          const subject = subjectInput.value;
          const message = messageInput.value;
          
          console.log('Form submitted:', { name, email, subject, message });
          
          // Reset form
          contactForm.reset();
          
          alert('Thank you for your message. I will get back to you soon!');
        }
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Account for header height
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="dark-theme">
      {/* Header Section */}
      <header className="header">
        <div className="container navbar">
          <div className="logo">
            <h1>Arwa<span>Dancan</span></h1>
          </div>
          <div className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="nav-menu" id="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#interests" className="nav-link">Interests</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="subtitle">Hello, I'm</p>
            <h1 className="title">Arwa Dancan</h1>
            <h2 className="occupation">Web Developer & Designer</h2>
            <p className="location">Based in Nairobi, Kenya</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#about" className="btn btn-secondary">About Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <p>Arwa Dancan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm Arwa Dancan, a passionate web developer and designer based in Nairobi, Kenya. I have a strong foundation in creating responsive, user-friendly websites and applications that deliver exceptional user experiences.</p>
              <p>With a keen eye for design and strong technical skills, I bridge the gap between aesthetics and functionality. I'm dedicated to continuous learning and staying updated with the latest web technologies and design trends.</p>
            </div>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Frontend Development</h4>
                  <div className="skill-items">
                    <div className="skill-item">
                      <span>HTML5/CSS3</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>JavaScript</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>React</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>Tailwind CSS</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend Development</h4>
                  <div className="skill-items">
                    <div className="skill-item">
                      <span>Node.js</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>Express.js</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>MongoDB</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>REST API Development</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Design Tools</h4>
                  <div className="skill-items">
                    <div className="skill-item">
                      <span>Figma</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>Adobe Photoshop</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>Adobe Illustrator</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>UI/UX Design</span>
                      <div className="progress-bar">
                        <div className="progress" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <h2>Education & Experience</h2>
            <div className="divider"></div>
          </div>
          <div className="education-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>BSc in Computer Science</h3>
                  <p className="timeline-institution">University of Nairobi</p>
                  <p className="timeline-period">2016 - 2020</p>
                  <p>Graduated with honors in Computer Science with a focus on software development and web technologies.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Web Development Bootcamp</h3>
                  <p className="timeline-institution">Tech Academy Kenya</p>
                  <p className="timeline-period">2020 - 2021</p>
                  <p>Intensive training in modern web development technologies and practices.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Frontend Developer</h3>
                  <p className="timeline-institution">Digital Solutions Ltd</p>
                  <p className="timeline-period">2021 - 2022</p>
                  <p>Developed and maintained responsive websites for various clients using modern frontend technologies.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Full Stack Developer</h3>
                  <p className="timeline-institution">Tech Innovate Kenya</p>
                  <p className="timeline-period">2022 - Present</p>
                  <p>Working on full-stack web applications and leading UI/UX design initiatives.</p>
                </div>
              </div>
            </div>
            <div className="resume">
              <h3>Check out my full resume</h3>
              <p>Download my CV for more details about my experience, projects, and skills.</p>
              <a href="#" className="btn btn-primary download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">E-Commerce Website</div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Platform</h3>
                <p>A fully responsive e-commerce website with product catalog, shopping cart, and secure checkout.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small btn-outline">View Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">Portfolio Website</div>
              </div>
              <div className="project-info">
                <h3>Portfolio Template</h3>
                <p>A customizable portfolio website template for creative professionals with animated sections.</p>
                <div className="project-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>GSAP</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small btn-outline">View Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">Task Manager App</div>
              </div>
              <div className="project-info">
                <h3>Task Manager App</h3>
                <p>A productivity app for managing tasks with categories, priorities, and deadline reminders.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Redux</span>
                  <span>Firebase</span>
                  <span>Material UI</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small btn-outline">View Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">Restaurant Website</div>
              </div>
              <div className="project-info">
                <h3>Restaurant Website</h3>
                <p>A responsive website for a restaurant featuring menu, online ordering, and table reservations.</p>
                <div className="project-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small btn-outline">View Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="interests">
        <div className="container">
          <div className="section-header">
            <h2>My Interests</h2>
            <div className="divider"></div>
          </div>
          <div className="interests-content">
            <div className="interest-card">
              <div className="interest-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Exploring innovative ways to enhance user experiences through thoughtful design.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Reading</h3>
              <p>Reading books on technology, design, and science fiction to gain new perspectives.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3>Music</h3>
              <p>Listening to and creating music to relax and find inspiration for creative work.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h3>Hiking</h3>
              <p>Exploring nature trails around Kenya to disconnect and recharge creative energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Me</h2>
            <div className="divider"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+254 700 123456</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>arwa.dancan@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="social-links">
                <h3>Find me on</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Dribbble">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send me a message</h3>
              <form id="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Arwa Dancan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
