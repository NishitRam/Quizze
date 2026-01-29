import React, { useState } from 'react';

export default function Dashboard() {
  const [userName] = useState('Wizard'); // You'll get this from your auth system later

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <svg width="50" height="50" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-logo">
            <circle cx="60" cy="60" r="58" fill="url(#sidebarGrad1)" stroke="#FFFFFF" strokeWidth="3"/>
            <path d="M60 25 L45 55 L75 55 Z" fill="#764ba2"/>
            <ellipse cx="60" cy="55" rx="15" ry="3" fill="#667eea"/>
            <circle cx="55" cy="40" r="1.5" fill="#FFD700"/>
            <circle cx="62" cy="35" r="1" fill="#FFD700"/>
            <circle cx="60" cy="75" r="15" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
            <line x1="70" y1="85" x2="75" y2="90" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="30" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
            <circle cx="90" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
            <defs>
              <linearGradient id="sidebarGrad1">
                <stop offset="0%" stopColor="#667eea"/>
                <stop offset="100%" stopColor="#764ba2"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="sidebar-brand">Quizzard</span>
        </div>

        <nav className="sidebar-nav">
          <a href="#dashboard" className="nav-item active">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboard</span>
          </a>
          <a href="#quizzes" className="nav-item">
            <span className="nav-icon">📝</span>
            <span className="nav-text">My Quizzes</span>
          </a>
          <a href="#browse" className="nav-item">
            <span className="nav-icon">🔍</span>
            <span className="nav-text">Browse</span>
          </a>
          <a href="#leaderboard" className="nav-item">
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Leaderboard</span>
          </a>
          <a href="#create" className="nav-item">
            <span className="nav-icon">➕</span>
            <span className="nav-text">Create Quiz</span>
          </a>
          <a href="#profile" className="nav-item">
            <span className="nav-icon">👤</span>
            <span className="nav-text">Profile</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="/" className="nav-item logout">
            <span className="nav-icon">🚪</span>
            <span className="nav-text">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="header-title">Welcome back, {userName}! 👋</h1>
            <p className="header-subtitle">Ready to continue your learning journey?</p>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
            <div className="user-avatar">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple">📚</div>
            <div className="stat-info">
              <div className="stat-value">24</div>
              <div className="stat-label">Quizzes Completed</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">⭐</div>
            <div className="stat-info">
              <div className="stat-value">850</div>
              <div className="stat-label">Total Score</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">🔥</div>
            <div className="stat-info">
              <div className="stat-value">7</div>
              <div className="stat-label">Day Streak</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">🏅</div>
            <div className="stat-info">
              <div className="stat-value">#12</div>
              <div className="stat-label">Global Rank</div>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Continue Learning</h2>
            <a href="#all" className="section-link">View All →</a>
          </div>

          <div className="quiz-cards">
            <div className="quiz-card">
              <div className="quiz-card-header">
                <span className="quiz-badge">In Progress</span>
                <span className="quiz-progress">60%</span>
              </div>
              <h3 className="quiz-card-title">JavaScript Fundamentals</h3>
              <p className="quiz-card-description">Master the basics of JavaScript programming</p>
              <div className="quiz-card-footer">
                <span className="quiz-info">📝 6/10 questions</span>
                <button className="quiz-continue-btn">Continue →</button>
              </div>
            </div>

            <div className="quiz-card">
              <div className="quiz-card-header">
                <span className="quiz-badge">In Progress</span>
                <span className="quiz-progress">30%</span>
              </div>
              <h3 className="quiz-card-title">World History</h3>
              <p className="quiz-card-description">Explore major historical events</p>
              <div className="quiz-card-footer">
                <span className="quiz-info">📝 3/10 questions</span>
                <button className="quiz-continue-btn">Continue →</button>
              </div>
            </div>

            <div className="quiz-card">
              <div className="quiz-card-header">
                <span className="quiz-badge new">New</span>
              </div>
              <h3 className="quiz-card-title">Science Quiz</h3>
              <p className="quiz-card-description">Test your knowledge of physics and chemistry</p>
              <div className="quiz-card-footer">
                <span className="quiz-info">📝 10 questions</span>
                <button className="quiz-start-btn">Start Quiz →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon success">✓</div>
              <div className="activity-content">
                <div className="activity-title">Completed "React Basics"</div>
                <div className="activity-time">2 hours ago</div>
              </div>
              <div className="activity-score">+50 pts</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon success">✓</div>
              <div className="activity-content">
                <div className="activity-title">Completed "CSS Flexbox"</div>
                <div className="activity-time">1 day ago</div>
              </div>
              <div className="activity-score">+45 pts</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon fire">🔥</div>
              <div className="activity-content">
                <div className="activity-title">7-day streak achieved!</div>
                <div className="activity-time">Today</div>
              </div>
              <div className="activity-score">+100 pts</div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dashboard-page {
          display: flex;
          min-height: 100vh;
          background: #f7fafc;
          font-family: 'Outfit', sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 280px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .sidebar-header {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-logo {
          width: 50px;
          height: 50px;
          border-radius: 12px;
        }

        .sidebar-brand {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 700;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s;
          font-weight: 500;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateX(5px);
        }

        .nav-item.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .nav-icon {
          font-size: 20px;
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-item.logout:hover {
          background: rgba(255, 0, 0, 0.2);
        }

        /* Main Content */
        .dashboard-main {
          flex: 1;
          margin-left: 280px;
          padding: 2rem;
          overflow-y: auto;
        }

        /* Header */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .header-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.25rem;
        }

        .header-subtitle {
          color: #718096;
          font-size: 16px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .notification-btn {
          position: relative;
          background: #f7fafc;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .notification-btn:hover {
          background: #edf2f7;
          transform: translateY(-2px);
        }

        .notification-icon {
          font-size: 20px;
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #e53e3e;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #667eea;
        }

        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .stat-icon.purple {
          background: rgba(102, 126, 234, 0.1);
        }

        .stat-icon.green {
          background: rgba(72, 187, 120, 0.1);
        }

        .stat-icon.orange {
          background: rgba(237, 137, 54, 0.1);
        }

        .stat-icon.blue {
          background: rgba(66, 153, 225, 0.1);
        }

        .stat-value {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
        }

        .stat-label {
          font-size: 14px;
          color: #718096;
        }

        /* Dashboard Section */
        .dashboard-section {
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }

        .section-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .section-link:hover {
          color: #764ba2;
        }

        /* Quiz Cards */
        .quiz-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .quiz-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .quiz-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .quiz-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .quiz-badge {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .quiz-badge.new {
          background: rgba(72, 187, 120, 0.1);
          color: #48bb78;
        }

        .quiz-progress {
          font-weight: 600;
          color: #667eea;
        }

        .quiz-card-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .quiz-card-description {
          color: #718096;
          font-size: 14px;
          margin-bottom: 1.5rem;
        }

        .quiz-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .quiz-info {
          color: #a0aec0;
          font-size: 14px;
        }

        .quiz-continue-btn,
        .quiz-start-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Outfit', sans-serif;
        }

        .quiz-continue-btn:hover,
        .quiz-start-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        /* Activity List */
        .activity-list {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 1px solid #edf2f7;
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
        }

        .activity-icon.success {
          background: rgba(72, 187, 120, 0.1);
          color: #48bb78;
        }

        .activity-icon.fire {
          background: rgba(237, 137, 54, 0.1);
        }

        .activity-content {
          flex: 1;
        }

        .activity-title {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.25rem;
        }

        .activity-time {
          font-size: 14px;
          color: #a0aec0;
        }

        .activity-score {
          font-weight: 700;
          color: #48bb78;
          font-size: 16px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sidebar {
            width: 80px;
          }

          .sidebar-brand,
          .nav-text {
            display: none;
          }

          .sidebar-header {
            padding: 1.5rem 1rem;
            justify-content: center;
          }

          .nav-item {
            justify-content: center;
            padding: 1rem;
          }

          .dashboard-main {
            margin-left: 80px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }

          .dashboard-main {
            margin-left: 0;
            padding: 1rem;
          }

          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .header-right {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .quiz-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
