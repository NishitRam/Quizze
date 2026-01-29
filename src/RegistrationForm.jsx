import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Handle social login
  const handleSocialLogin = (provider) => {
    // In production, these would be your actual OAuth URLs with client IDs
    const oauthUrls = {
      'Google': 'https://accounts.google.com/signin',
      'Facebook': 'https://www.facebook.com/login',
      'Apple': 'https://appleid.apple.com/auth/authorize'
    };

    // Open OAuth page in same window (or new tab with window.open)
    if (oauthUrls[provider]) {
      // For demo: alert then open
      alert(`Opening ${provider} authentication...`);
      window.open(oauthUrls[provider], '_blank');
      
      // After real OAuth, redirect to dashboard
      // In production, OAuth will redirect back with token
      // Then you'd do: window.location.hash = 'dashboard';
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Check password strength
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    setPasswordStrength(strength);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation - letters, spaces, hyphens only, 2-50 characters
    const nameRegex = /^[a-zA-Z\s-]{2,50}$/;
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!nameRegex.test(formData.fullName.trim())) {
      newErrors.fullName = 'Name must be 2-50 characters, letters only';
    }

    // Email validation - proper email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation - strong password requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, number, and special character';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid - proceed with registration
      console.log('Registration data:', formData);
      
      // Redirect to dashboard after successful registration
      window.location.hash = 'dashboard';
      
      // Here you would typically send data to your backend:
      // fetch('/api/register', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // }).then(() => window.location.hash = 'dashboard')
    }
  };

  // Get password strength color and text
  const getPasswordStrengthInfo = () => {
    switch(passwordStrength) {
      case 0:
      case 1:
        return { color: '#e53e3e', text: 'Weak', width: '25%' };
      case 2:
        return { color: '#ed8936', text: 'Fair', width: '50%' };
      case 3:
        return { color: '#ecc94b', text: 'Good', width: '75%' };
      case 4:
        return { color: '#48bb78', text: 'Strong', width: '100%' };
      default:
        return { color: '#e2e8f0', text: '', width: '0%' };
    }
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="registration-page">
      {/* Animated Background */}
      <div className="reg-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Registration Card */}
      <div className="registration-card">
        {/* Logo and Header */}
        <div className="reg-header">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="reg-logo">
            <circle cx="60" cy="60" r="58" fill="url(#regGrad1)" stroke="url(#regGrad2)" strokeWidth="4"/>
            <path d="M60 25 L45 55 L75 55 Z" fill="#764ba2"/>
            <ellipse cx="60" cy="55" rx="15" ry="3" fill="#667eea"/>
            <path d="M60 25 L45 55 L75 55 Z" fill="url(#regHatGrad)" opacity="0.7"/>
            <circle cx="55" cy="40" r="1.5" fill="#FFD700"/>
            <circle cx="62" cy="35" r="1" fill="#FFD700"/>
            <circle cx="58" cy="48" r="1.2" fill="#FFD700"/>
            <circle cx="60" cy="75" r="15" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
            <line x1="70" y1="85" x2="75" y2="90" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="30" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
            <circle cx="90" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
            <defs>
              <linearGradient id="regGrad1">
                <stop offset="0%" stopColor="#667eea"/>
                <stop offset="100%" stopColor="#764ba2"/>
              </linearGradient>
              <linearGradient id="regGrad2">
                <stop offset="0%" stopColor="#764ba2"/>
                <stop offset="100%" stopColor="#667eea"/>
              </linearGradient>
              <linearGradient id="regHatGrad">
                <stop offset="0%" stopColor="#764ba2" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#667eea" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>
          <h1 className="reg-title">Join Quizzard</h1>
          <p className="reg-subtitle">Start your magical learning journey today!</p>
        </div>

        {/* Registration Form */}
        <form className="reg-form" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Create a strong password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div 
                    className="strength-fill"
                    style={{ 
                      width: strengthInfo.width, 
                      backgroundColor: strengthInfo.color 
                    }}
                  ></div>
                </div>
                <span className="strength-text" style={{ color: strengthInfo.color }}>
                  {strengthInfo.text}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔐</span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm your password"
              />
            </div>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          {/* Terms and Conditions */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                I agree to the <a href="#terms" className="link">Terms of Service</a> and{' '}
                <a href="#privacy" className="link">Privacy Policy</a>
              </span>
            </label>
            {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            <span className="button-text">Create Account</span>
            <span className="button-icon">✨</span>
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">or sign up with</span>
        </div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button 
            className="social-button google"
            onClick={() => handleSocialLogin('Google')}
            type="button"
          >
            <span className="social-logo">G</span>
            <span className="social-text">Google</span>
          </button>
          <button 
            className="social-button facebook"
            onClick={() => handleSocialLogin('Facebook')}
            type="button"
          >
            <span className="social-logo">f</span>
            <span className="social-text">Facebook</span>
          </button>
        </div>

        {/* Sign In Link */}
        <div className="footer-text">
          Already have an account?{' '}
          <a href="#auth" className="footer-link">Sign In</a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .registration-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated Background */
        .reg-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: floatCircle 8s ease-in-out infinite;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: 10%;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 250px;
          height: 250px;
          top: 40%;
          right: -100px;
          animation-delay: 4s;
        }

        @keyframes floatCircle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        /* Registration Card */
        .registration-card {
          background: white;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          padding: 3rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          z-index: 1;
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Header */
        .reg-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .reg-logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .reg-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .reg-subtitle {
          font-size: 16px;
          color: #718096;
        }

        /* Form */
        .reg-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          font-size: 18px;
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s;
          background: #f7fafc;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input.error {
          border-color: #e53e3e;
        }

        .form-input.error:focus {
          box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
        }

        .toggle-password {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 0.25rem;
          transition: transform 0.2s;
        }

        .toggle-password:hover {
          transform: scale(1.1);
        }

        .error-message {
          font-size: 13px;
          color: #e53e3e;
          margin-top: -0.25rem;
        }

        /* Password Strength */
        .password-strength {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .strength-bar {
          flex: 1;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .strength-fill {
          height: 100%;
          transition: all 0.3s;
        }

        .strength-text {
          font-size: 12px;
          font-weight: 600;
        }

        /* Checkbox */
        .checkbox-group {
          margin-top: 0.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
        }

        .checkbox-input {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #667eea;
        }

        .checkbox-text {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.5;
        }

        .link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .link:hover {
          color: #764ba2;
        }

        /* Submit Button */
        .submit-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 1rem;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Fredoka', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          margin-top: 0.5rem;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .button-icon {
          font-size: 20px;
        }

        /* Divider */
        .divider {
          margin: 2rem 0 1.5rem;
          position: relative;
          text-align: center;
        }

        .divider::before,
        .divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 42%;
          height: 1px;
          background: #e2e8f0;
        }

        .divider::before {
          left: 0;
        }

        .divider::after {
          right: 0;
        }

        .divider-text {
          background: white;
          padding: 0 1rem;
          font-size: 13px;
          color: #a0aec0;
        }

        /* Social Login */
        .social-login {
          display: flex;
          gap: 1rem;
        }

        .social-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s;
        }

        .social-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .social-logo {
          font-size: 20px;
          font-weight: 700;
        }

        .social-button.google:hover {
          border-color: #ea4335;
          color: #ea4335;
        }

        .social-button.facebook:hover {
          border-color: #1877f2;
          color: #1877f2;
        }

        /* Footer */
        .footer-text {
          text-align: center;
          margin-top: 2rem;
          font-size: 14px;
          color: #718096;
        }

        .footer-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #764ba2;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .registration-card {
            padding: 2rem 1.5rem;
          }

          .reg-title {
            font-size: 28px;
          }

          .social-login {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
