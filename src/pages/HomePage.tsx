import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <h2>BlocoManager</h2>
            </Link>
          </div>
          <div className="nav-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About</a>
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/login" className="btn-outline">Sign In</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Streamline Your <span className="gradient-text">Scheduling</span> Today
          </h1>
          <p className="hero-subtitle">
            The all-in-one appointment management platform that helps businesses save time, 
            reduce no-shows, and deliver exceptional customer experiences.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="btn-primary btn-large">Start Free Trial</Link>
            <a href="#demo" className="btn-secondary btn-large">Watch Demo</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Everything you need to manage appointments</h2>
            <p>Powerful features designed to streamline your scheduling process and grow your business</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Online Booking</h3>
              <p>Let customers book appointments 24/7 with your customizable booking page</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Reminders</h3>
              <p>Reduce no-shows with automated SMS and email reminders</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Track performance with detailed insights and reporting tools</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Payment Processing</h3>
              <p>Accept payments online with secure, integrated payment solutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile App</h3>
              <p>Manage your business on the go with our mobile applications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Integrations</h3>
              <p>Connect with your favorite tools and streamline your workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Simple, transparent pricing</h2>
            <p>Choose the plan that best fits your business needs</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Up to 100 appointments/month</li>
                <li>✓ Basic scheduling features</li>
                <li>✓ Email reminders</li>
                <li>✓ Mobile app access</li>
                <li>✓ Email support</li>
              </ul>
              <Link to="/signup" className="btn-outline">Get Started</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Unlimited appointments</li>
                <li>✓ Advanced scheduling</li>
                <li>✓ SMS & Email reminders</li>
                <li>✓ Payment processing</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Priority support</li>
              </ul>
              <Link to="/signup" className="btn-primary">Get Started</Link>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Everything in Professional</li>
                <li>✓ Multi-location support</li>
                <li>✓ Advanced integrations</li>
                <li>✓ Custom branding</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ 24/7 phone support</li>
              </ul>
              <Link to="/signup" className="btn-outline">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Trusted by thousands of businesses</h2>
            <p>See what our customers have to say about BlocoManager</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"BlocoManager has transformed how we handle appointments. Our no-show rate dropped by 60% and customer satisfaction is at an all-time high."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Owner, Bella Salon</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The analytics dashboard gives us insights we never had before. We've optimized our schedule and increased revenue by 30%."</p>
              <div className="testimonial-author">
                <strong>Mike Chen</strong>
                <span>Manager, FitLife Gym</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Customer support is exceptional. They helped us migrate from our old system seamlessly and were available every step of the way."</p>
              <div className="testimonial-author">
                <strong>Dr. Emily Rodriguez</strong>
                <span>Medical Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your business?</h2>
            <p>Join thousands of businesses already using BlocoManager to streamline their operations</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-secondary btn-large">Start Your Free Trial</Link>
              <p className="cta-note">No credit card required • 14-day free trial</p>
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
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#mobile">Mobile App</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
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

export default HomePage;