import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <h2>BlocoManager</h2>
            </Link>
          </div>
          <div className="nav-menu">
            <Link to="/#features" className="nav-link">Features</Link>
            <Link to="/#pricing" className="nav-link">Pricing</Link>
            <Link to="/about" className="nav-link active">About</Link>
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/login" className="btn-outline">Sign In</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About BlocoManager</h1>
          <p>We're revolutionizing how businesses manage appointments and connect with their customers</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At BlocoManager, we believe that efficient scheduling shouldn't be complicated. Our mission 
                is to empower businesses of all sizes with intuitive, powerful appointment management tools 
                that save time, reduce no-shows, and enhance customer satisfaction.
              </p>
              <p>
                We're committed to building technology that adapts to your business needs, not the other way around. 
                Every feature we develop is designed with real business challenges in mind, ensuring you can focus 
                on what matters most – serving your customers.
              </p>
            </div>
            <div className="mission-image">
              <div className="placeholder-image">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>Our Story</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Founded by a team of entrepreneurs who experienced firsthand the frustration of managing 
                  appointments with outdated systems. We saw an opportunity to create something better.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>First 1,000 Customers</h3>
                <p>
                  Reached our first milestone with businesses ranging from solo practitioners to multi-location 
                  enterprises, all finding value in our simple yet powerful platform.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Innovation Continues</h3>
                <p>
                  Today, we serve over 10,000 businesses worldwide, continuously innovating with AI-powered 
                  features, advanced analytics, and seamless integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer First</h3>
              <p>Every decision we make starts with how it will impact our customers. Your success is our success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We're constantly pushing boundaries, embracing new technologies to solve real business problems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Trust & Security</h3>
              <p>Your data is sacred. We maintain the highest standards of security and privacy protection.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Simplicity</h3>
              <p>Complex problems deserve elegant solutions. We make powerful tools that anyone can use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>We're a diverse group of problem-solvers, designers, and engineers passionate about helping businesses thrive.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Alex Rodriguez</h3>
              <p>CEO & Co-Founder</p>
              <span>Former startup founder with 10+ years in SaaS</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Chen</h3>
              <p>CTO & Co-Founder</p>
              <span>Engineering leader from Google and Microsoft</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🎨</div>
              <h3>Marcus Johnson</h3>
              <p>Head of Design</p>
              <span>UX expert focused on business applications</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🔬</div>
              <h3>Dr. Emily Park</h3>
              <p>Head of Product</p>
              <span>PhD in Computer Science, product strategy expert</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>David Kim</h3>
              <p>VP of Sales</p>
              <span>15+ years helping businesses grow</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎓</div>
              <h3>Lisa Thompson</h3>
              <p>Head of Customer Success</p>
              <span>Dedicated to making customers successful</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>BlocoManager by the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Businesses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Appointments Managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Customer Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section">
        <div className="container">
          <h2>Recognition & Awards</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best SaaS Startup 2024</h3>
              <p>TechCrunch Startup Awards</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h3>Top Rated Scheduling Software</h3>
              <p>G2 Summer 2024 Report</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🚀</div>
              <h3>Fastest Growing B2B Company</h3>
              <p>Inc. 5000 List 2024</p>
            </div>
            <div className="award-item">
              <div className="award-icon">💼</div>
              <h3>Best Business Software</h3>
              <p>Software Advice FrontRunners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="careers-section">
        <div className="container">
          <div className="careers-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented individuals who share our passion for helping businesses succeed. 
              Join us in building the future of appointment management.
            </p>
            <div className="careers-cta">
              <Link to="/careers" className="btn-primary btn-large">View Open Positions</Link>
              <p>Remote-friendly • Competitive benefits • Equity options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses that trust BlocoManager with their scheduling needs</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-secondary btn-large">Start Free Trial</Link>
              <Link to="/support" className="btn-outline btn-large">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>BlocoManager</h3>
              <p>The complete appointment management solution for modern businesses.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><Link to="/#features">Features</Link></li>
                <li><Link to="/#pricing">Pricing</Link></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#mobile">Mobile App</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><Link to="/support">Help Center</Link></li>
                <li><Link to="/support">Contact Us</Link></li>
                <li><a href="#status">System Status</a></li>
                <li><a href="#api">API Docs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/legal">Privacy Policy</Link></li>
                <li><Link to="/legal">Terms of Service</Link></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#compliance">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BlocoManager. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/legal">Privacy</Link>
              <Link to="/legal">Terms</Link>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;