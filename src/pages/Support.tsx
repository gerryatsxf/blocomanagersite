import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });

  const faqs = [
    {
      question: "What is BlocoManager?",
      answer: "BlocoManager is a comprehensive scheduling and appointment management platform designed to help businesses streamline their booking processes, manage resources, and improve customer experience."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our setup wizard to configure your business settings, add services, and start accepting bookings."
    },
    {
      question: "What types of businesses can use BlocoManager?",
      answer: "BlocoManager is perfect for service-based businesses including salons, spas, fitness centers, medical practices, consulting firms, tutoring services, and any business that needs appointment scheduling."
    },
    {
      question: "Can I customize my booking page?",
      answer: "Yes! You can fully customize your booking page with your brand colors, logo, and custom fields. You can also set your availability, service durations, and booking rules."
    },
    {
      question: "Do you offer integrations?",
      answer: "We integrate with popular tools including Google Calendar, Outlook, Zoom, Stripe, PayPal, Mailchimp, and many more. Check our integrations page for the full list."
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes! We have mobile apps for both iOS and Android that allow you to manage your bookings, view your schedule, and communicate with clients on the go."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we follow industry best practices for data protection and privacy."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment processing is handled securely through our certified payment partners."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your current billing period."
    },
    {
      question: "Do you offer customer support?",
      answer: "We offer 24/7 customer support through email, live chat, and phone. Our Pro and Enterprise customers also get priority support and dedicated account managers."
    }
  ];

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'normal'
    });
  };

  return (
    <div className="support-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <h2>BlocoManager</h2>
            </Link>
          </div>
          <div className="nav-menu">
            <Link to="/login" className="btn-outline">Sign In</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="support-container">
        <header className="support-header">
          <h1>How can we help you?</h1>
          <p>Find answers to common questions or get in touch with our support team</p>
        </header>

        <div className="support-tabs">
          <button 
            className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            Frequently Asked Questions
          </button>
          <button 
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Support
          </button>
        </div>

        {activeTab === 'faq' && (
          <div className="faq-section">
            <div className="faq-search">
              <input 
                type="text" 
                placeholder="Search FAQs..." 
                className="search-input"
              />
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => handleFaqToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${expandedFaq === index ? 'expanded' : ''}`}>
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="faq-footer">
              <p>Still have questions? <button onClick={() => setActiveTab('contact')} className="link-button">Contact our support team</button></p>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="contact-section">
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>📧 Email Support</h3>
                  <p>support@blocomanager.com</p>
                  <span>Response within 24 hours</span>
                </div>
                <div className="contact-method">
                  <h3>💬 Live Chat</h3>
                  <p>Available 24/7</p>
                  <button className="btn-outline">Start Chat</button>
                </div>
                <div className="contact-method">
                  <h3>📞 Phone Support</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <h3>Send us a message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={contactForm.priority}
                  onChange={handleContactChange}
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={6}
                  required
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>

              <button type="submit" className="btn-primary btn-large">
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;