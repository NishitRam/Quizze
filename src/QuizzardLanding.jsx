import React, { useState } from 'react';

export default function QuizzardLanding() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    window.location.hash = 'dashboard';
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.hash = 'dashboard';
  };

  const handleSocialLogin = (provider) => {
    const oauthUrls = {
      'Google': 'https://accounts.google.com/signin',
      'Facebook': 'https://www.facebook.com/login',
      'Apple': 'https://appleid.apple.com/auth/authorize'
    };

    if (oauthUrls[provider]) {
      alert(`Opening ${provider} authentication...`);
      window.open(oauthUrls[provider], '_blank');
    }
  };

  return (
    <div className="app-container">
      {/* Animated background */}
      <div className="magic-background">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
      </div>

      <div className={`auth-container ${isSignUp ? 'active' : ''}`}>
        {/* Sign In Form */}
        <div className="form-section sign-in-section">
          <div className="form-content">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-img">
              <circle cx="60" cy="60" r="58" fill="url(#signInGrad1)" stroke="url(#signInGrad2)" strokeWidth="4"/>
              <path d="M60 25 L45 55 L75 55 Z" fill="#764ba2"/>
              <ellipse cx="60" cy="55" rx="15" ry="3" fill="#667eea"/>
              <path d="M60 25 L45 55 L75 55 Z" fill="url(#signInHatGrad)" opacity="0.7"/>
              <circle cx="55" cy="40" r="1.5" fill="#FFD700"/>
              <circle cx="62" cy="35" r="1" fill="#FFD700"/>
              <circle cx="58" cy="48" r="1.2" fill="#FFD700"/>
              <circle cx="60" cy="75" r="15" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
              <line x1="70" y1="85" x2="75" y2="90" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="60" cy="75" r="12" fill="url(#signInGlow)" opacity="0.3"/>
              <circle cx="30" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
              <circle cx="90" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
              <circle cx="60" cy="30" r="1.5" fill="#FFD700" opacity="0.8"/>
              <defs>
                <linearGradient id="signInGrad1">
                  <stop offset="0%" stopColor="#667eea"/>
                  <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
                <linearGradient id="signInGrad2">
                  <stop offset="0%" stopColor="#764ba2"/>
                  <stop offset="100%" stopColor="#667eea"/>
                </linearGradient>
                <linearGradient id="signInHatGrad">
                  <stop offset="0%" stopColor="#764ba2" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#667eea" stopOpacity="0.8"/>
                </linearGradient>
                <radialGradient id="signInGlow">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#667eea" stopOpacity="0.2"/>
                </radialGradient>
              </defs>
            </svg>
            <h1 className="form-title">Welcome Back, Wizard!</h1>
            <p className="form-subtitle">Sign in to continue your quest</p>
            
            <form className="auth-form" onSubmit={handleSignIn}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="form-input"
                required
              />
              <a href="#forgot" className="forgot-link">Forgot your password?</a>
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </form>

            <div className="social-divider">
              <span>or continue with</span>
            </div>

            <div className="social-buttons">
              <button 
                className="social-btn google-btn"
                onClick={() => handleSocialLogin('Google')}
                type="button"
                title="Sign in with Google"
              >
                <span className="social-icon">G</span>
              </button>
              <button 
                className="social-btn facebook-btn"
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
                title="Sign in with Facebook"
              >
                <span className="social-icon">f</span>
              </button>
              <button 
                className="social-btn apple-btn"
                onClick={() => handleSocialLogin('Apple')}
                type="button"
                title="Sign in with Apple"
              >
                <span className="social-icon apple-icon"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="form-section sign-up-section">
          <div className="form-content">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-img">
              <circle cx="60" cy="60" r="58" fill="url(#signUpGrad1)" stroke="url(#signUpGrad2)" strokeWidth="4"/>
              <path d="M60 25 L45 55 L75 55 Z" fill="#764ba2"/>
              <ellipse cx="60" cy="55" rx="15" ry="3" fill="#667eea"/>
              <path d="M60 25 L45 55 L75 55 Z" fill="url(#signUpHatGrad)" opacity="0.7"/>
              <circle cx="55" cy="40" r="1.5" fill="#FFD700"/>
              <circle cx="62" cy="35" r="1" fill="#FFD700"/>
              <circle cx="58" cy="48" r="1.2" fill="#FFD700"/>
              <circle cx="60" cy="75" r="15" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
              <line x1="70" y1="85" x2="75" y2="90" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="60" cy="75" r="12" fill="url(#signUpGlow)" opacity="0.3"/>
              <circle cx="30" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
              <circle cx="90" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
              <circle cx="60" cy="30" r="1.5" fill="#FFD700" opacity="0.8"/>
              <defs>
                <linearGradient id="signUpGrad1">
                  <stop offset="0%" stopColor="#667eea"/>
                  <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
                <linearGradient id="signUpGrad2">
                  <stop offset="0%" stopColor="#764ba2"/>
                  <stop offset="100%" stopColor="#667eea"/>
                </linearGradient>
                <linearGradient id="signUpHatGrad">
                  <stop offset="0%" stopColor="#764ba2" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#667eea" stopOpacity="0.8"/>
                </linearGradient>
                <radialGradient id="signUpGlow">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#667eea" stopOpacity="0.2"/>
                </radialGradient>
              </defs>
            </svg>
            <h1 className="form-title">Join the Guild!</h1>
            <p className="form-subtitle">Create your wizard account</p>
            
            <form className="auth-form" onSubmit={handleSignUp}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="form-input"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
              <input 
                type="password" 
                placeholder="Create Password" 
                className="form-input"
                required
              />
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>

            <div className="social-divider">
              <span>or sign up with</span>
            </div>

            <div className="social-buttons">
              <button 
                className="social-btn google-btn"
                onClick={() => handleSocialLogin('Google')}
                type="button"
                title="Sign up with Google"
              >
                <span className="social-icon">G</span>
              </button>
              <button 
                className="social-btn facebook-btn"
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
                title="Sign up with Facebook"
              >
                <span className="social-icon">f</span>
              </button>
              <button 
                className="social-btn apple-btn"
                onClick={() => handleSocialLogin('Apple')}
                type="button"
                title="Sign up with Apple"
              >
                <span className="social-icon apple-icon"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Overlay Panel */}
        <div className="overlay-section">
          <div className="overlay-content">
            {/* Left Panel - shown when sign up is active */}
            <div className="overlay-panel left-panel">
              <h2 className="overlay-title">Already Have Powers?</h2>
              <p className="overlay-text">
                Sign in to access your magical quiz journey and continue leveling up!
              </p>
              <button 
                className="switch-btn"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>

            {/* Right Panel - shown when sign in is active */}
            <div className="overlay-panel right-panel">
              <h2 className="overlay-title">New to Quizzard?</h2>
              <p className="overlay-text">
                Join our magical community and embark on an epic learning adventure!
              </p>
              <button 
                className="switch-btn"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Outfit:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        /* Magical animated background */
        .magic-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite ease-in-out;
        }

        .star-1 { width: 3px; height: 3px; top: 20%; left: 10%; animation-delay: 0s; }
        .star-2 { width: 2px; height: 2px; top: 40%; left: 80%; animation-delay: 1s; }
        .star-3 { width: 4px; height: 4px; top: 70%; left: 20%; animation-delay: 0.5s; }
        .star-4 { width: 2px; height: 2px; top: 30%; left: 60%; animation-delay: 1.5s; }
        .star-5 { width: 3px; height: 3px; top: 80%; left: 70%; animation-delay: 0.7s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Main container */
        .auth-container {
          background: white;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          width: 900px;
          max-width: 100%;
          min-height: 600px;
          display: flex;
        }

        /* Form sections */
        .form-section {
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .sign-in-section {
          left: 0;
          z-index: 2;
        }

        .sign-up-section {
          left: 0;
          opacity: 0;
          z-index: 1;
        }

        .auth-container.active .sign-in-section {
          transform: translateX(100%);
        }

        .auth-container.active .sign-up-section {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: showPanel 0.7s;
        }

        @keyframes showPanel {
          0%, 49.99% {
            opacity: 0;
            z-index: 1;
          }
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .form-content {
          padding: 50px 60px;
          text-align: center;
          width: 100%;
        }

        .logo-img {
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          animation: floatLogo 3s ease-in-out infinite;
        }

        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .form-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .form-subtitle {
          font-size: 16px;
          color: #718096;
          margin-bottom: 30px;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-input {
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 15px 20px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s;
          outline: none;
        }

        .form-input:focus {
          border-color: #667eea;
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }

        .form-input::placeholder {
          color: #a0aec0;
        }

        .forgot-link {
          text-align: right;
          font-size: 13px;
          color: #667eea;
          text-decoration: none;
          margin-top: -5px;
          transition: color 0.3s;
        }

        .forgot-link:hover {
          color: #764ba2;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 15px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Fredoka', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .social-divider {
          margin: 25px 0;
          position: relative;
          text-align: center;
        }

        .social-divider::before,
        .social-divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 40%;
          height: 1px;
          background: #e2e8f0;
        }

        .social-divider::before {
          left: 0;
        }

        .social-divider::after {
          right: 0;
        }

        .social-divider span {
          background: white;
          padding: 0 15px;
          color: #a0aec0;
          font-size: 13px;
        }

        .social-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          font-size: 20px;
          font-weight: 600;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Apple Icon Specific Styling */
        .apple-icon::before {
          content: '';
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 24px;
          font-weight: 400;
        }

        .google-btn:hover {
          border-color: #ea4335;
          color: #ea4335;
        }

        .facebook-btn:hover {
          border-color: #1877f2;
          color: #1877f2;
        }

        .apple-btn:hover {
          border-color: #000;
          background: #000;
        }

        .apple-btn:hover .apple-icon::before {
          color: white;
        }

        /* Overlay section */
        .overlay-section {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 100;
        }

        .auth-container.active .overlay-section {
          transform: translateX(-100%);
        }

        .overlay-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .auth-container.active .overlay-content {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          color: white;
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* CRITICAL FIX: Only show one panel at a time */
        .left-panel {
          left: 0;
          transform: translateX(-20%);
          opacity: 0;
          visibility: hidden;
        }

        .auth-container.active .left-panel {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }

        .right-panel {
          right: 0;
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }

        .auth-container.active .right-panel {
          transform: translateX(20%);
          opacity: 0;
          visibility: hidden;
        }

        .overlay-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .overlay-text {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .switch-btn {
          background: transparent;
          border: 2px solid white;
          color: white;
          border-radius: 25px;
          padding: 12px 45px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Fredoka', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .switch-btn:hover {
          background: white;
          color: #667eea;
          transform: scale(1.05);
        }

        .switch-btn:active {
          transform: scale(0.98);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .auth-container {
            width: 100%;
            min-height: 500px;
            flex-direction: column;
          }

          .form-section,
          .overlay-section {
            width: 100%;
            position: static;
          }

          .overlay-section {
            display: none;
          }

          .form-content {
            padding: 40px 30px;
          }

          .sign-up-section {
            opacity: 1;
            display: none;
          }

          .auth-container.active .sign-up-section {
            display: flex;
            transform: none;
          }

          .auth-container.active .sign-in-section {
            display: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
