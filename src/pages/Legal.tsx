import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="legal-page">
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

      <div className="legal-container">
        <header className="legal-header">
          <h1>Legal Information</h1>
          <p>Our terms of service and privacy policy</p>
        </header>

        <div className="legal-tabs">
          <button 
            className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </button>
          <button 
            className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
        </div>

        {activeTab === 'terms' && (
          <div className="legal-content">
            <div className="legal-section">
              <p className="last-updated">Last updated: November 21, 2025</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using BlocoManager ("Service"), you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to abide by the above, please do not use 
                this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                BlocoManager is a scheduling and appointment management platform that allows businesses to manage 
                bookings, appointments, and customer interactions. The service includes web-based software, mobile 
                applications, and related support services.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                To access certain features of the Service, you must register for an account. You agree to provide 
                accurate, current, and complete information during the registration process and to update such 
                information to keep it accurate, current, and complete.
              </p>
              <ul>
                <li>You are responsible for safeguarding your account credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive</li>
                <li>Impersonate any person or entity or falsely state your affiliation</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Use the Service for any commercial purpose without our prior written consent</li>
              </ul>

              <h2>5. Payment Terms</h2>
              <p>
                Certain features of the Service require payment of fees. You agree to pay all applicable fees 
                as described in your chosen pricing plan. All fees are non-refundable except as expressly 
                stated in these terms.
              </p>
              <ul>
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>You may cancel your subscription at any time</li>
              </ul>

              <h2>6. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of BlocoManager and its licensors. The Service is protected by copyright, 
                trademark, and other laws.
              </p>

              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without 
                prior notice or liability, under our sole discretion, for any reason whatsoever, including 
                but not limited to a breach of the Terms.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall BlocoManager, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="contact-info">
                <p>Email: legal@blocomanager.com</p>
                <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="legal-content">
            <div className="legal-section">
              <p className="last-updated">Last updated: November 21, 2025</p>

              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul>
                <li>Create an account or use our services</li>
                <li>Make appointments or bookings</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3>Personal Information</h3>
              <ul>
                <li>Name, email address, and phone number</li>
                <li>Business information and preferences</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Usage Information</h3>
              <ul>
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information and identifiers</li>
                <li>Usage patterns and preferences</li>
                <li>Performance and error data</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect and prevent fraudulent activities</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:</p>
              <ul>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist our operations</li>
                <li>In the event of a merger or acquisition</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and employee training</li>
                <li>Secure hosting and backup procedures</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and 
                fulfill the purposes outlined in this policy. We may also retain information to comply 
                with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li>Access: Request access to your personal information</li>
                <li>Correction: Request correction of inaccurate information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Portability: Request a copy of your data in a portable format</li>
                <li>Opt-out: Unsubscribe from marketing communications</li>
              </ul>

              <h2>7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use personal information. 
                You can control cookies through your browser settings, but disabling cookies may affect 
                the functionality of our services.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>
                Our service may contain links to third-party websites or integrate with third-party services. 
                We are not responsible for the privacy practices of these third parties.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>

              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "last updated" date.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="contact-info">
                <p>Email: privacy@blocomanager.com</p>
                <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;