import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail()) {
      // Handle password reset logic here
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              <h2>BlocoManager</h2>
            </Link>
            <div className="success-icon">✓</div>
            <h1>Check your email</h1>
            <p>We've sent a password reset link to <strong>{email}</strong></p>
          </div>

          <div className="auth-content">
            <div className="info-box">
              <h3>What's next?</h3>
              <ul>
                <li>Check your email inbox (and spam folder)</li>
                <li>Click the reset link in the email</li>
                <li>Create a new password</li>
                <li>Sign in with your new password</li>
              </ul>
            </div>

            <div className="auth-actions">
              <p>Didn't receive the email?</p>
              <button 
                type="button" 
                className="btn-outline"
                onClick={() => setIsSubmitted(false)}
              >
                Try again
              </button>
            </div>
          </div>

          <div className="auth-footer">
            <p>Remember your password? <Link to="/login" className="link">Back to sign in</Link></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <h2>BlocoManager</h2>
          </Link>
          <h1>Forgot your password?</h1>
          <p>No worries! Enter your email address and we'll send you a reset link.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={error ? 'error' : ''}
              placeholder="Enter your email address"
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <button type="submit" className="btn-primary btn-large auth-submit">
            Send Reset Link
          </button>
        </form>

        <div className="auth-footer">
          <p>Remember your password? <Link to="/login" className="link">Back to sign in</Link></p>
          <p>Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;