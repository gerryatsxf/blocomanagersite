import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Support from './pages/Support';
import Legal from './pages/Legal';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/support" element={<Support />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>BlocoManager</h2>
          </div>
          <div className="nav-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Scheduling Made <span className="gradient-text">Simple</span>
            </h1>
            <p className="hero-subtitle">
              Streamline your appointments, boost productivity, and never miss a meeting again. 
              The all-in-one scheduling solution for modern businesses.
            </p>
            <div className="hero-cta">
              <button className="btn-primary btn-large">Start Free Trial</button>
              <button className="btn-secondary btn-large">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Appointments Scheduled</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose BlocoManager?</h2>
            <p>Everything you need to manage appointments and grow your business</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Smart Scheduling</h3>
              <p>AI-powered scheduling that finds the perfect time for everyone</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Auto Sync</h3>
              <p>Seamlessly sync with Google Calendar, Outlook, and other tools</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Manage appointments on-the-go with our mobile app</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Reminders</h3>
              <p>Automated reminders reduce no-shows by 90%</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Detailed insights to optimize your scheduling workflow</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Enterprise-grade security with GDPR compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">9</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✅ Up to 50 appointments/month</li>
                <li>✅ Basic calendar sync</li>
                <li>✅ Email reminders</li>
                <li>✅ Mobile app access</li>
              </ul>
              <button className="btn-outline">Start Free Trial</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✅ Unlimited appointments</li>
                <li>✅ Advanced integrations</li>
                <li>✅ SMS & email reminders</li>
                <li>✅ Custom branding</li>
                <li>✅ Analytics dashboard</li>
                <li>✅ Priority support</li>
              </ul>
              <button className="btn-primary">Start Free Trial</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✅ Everything in Professional</li>
                <li>✅ Advanced security</li>
                <li>✅ API access</li>
                <li>✅ Dedicated support</li>
                <li>✅ Custom integrations</li>
              </ul>
              <button className="btn-outline">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Loved by Businesses Worldwide</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"BlocoManager transformed our scheduling process. We've reduced no-shows by 80% and saved hours every week."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>CEO, HealthCare Plus</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The integration with our existing tools was seamless. Our team adopted it immediately."</p>
              <div className="testimonial-author">
                <strong>Mike Chen</strong>
                <span>Operations Manager, TechStart</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Best scheduling software we've ever used. The mobile app is particularly impressive."</p>
              <div className="testimonial-author">
                <strong>Emily Davis</strong>
                <span>Founder, Design Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Scheduling?</h2>
            <p>Join thousands of businesses already using BlocoManager</p>
            <div className="cta-buttons">
              <button className="btn-primary btn-large">Start Free Trial</button>
              <span className="cta-note">No credit card required • 14-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>BlocoManager</h3>
              <p>The modern scheduling solution for growing businesses.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#status">System Status</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BlocoManager. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App