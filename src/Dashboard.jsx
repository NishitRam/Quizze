import React, { useState } from 'react';
import Quiz from './Quiz';
import MyQuizzes from './MyQuizzes';
import CreateQuiz from './CreateQuiz';
import BrowseQuizzes from './BrowseQuizzes';
import { useQuiz } from './QuizContext';

export default function Dashboard() {
  const { user, getStats, getRecentQuizzes } = useQuiz();
  const stats = getStats();
  const recentQuizzes = getRecentQuizzes(3);
  
  const [userName] = useState(user.name);
  const [currentView, setCurrentView] = useState('dashboard');

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      window.location.hash = '';
    }
  };

  // If quiz view is selected, show Quiz component
  if (currentView === 'quiz') {
    return <Quiz />;
  }

  // If myquizzes view is selected, show MyQuizzes component
  if (currentView === 'myquizzes') {
    return (
      <div className="dashboard-page">
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
          {renderSidebar()}
        </aside>
        <main className="dashboard-main">
          <MyQuizzes />
        </main>
      </div>
    );
  }

  // If create view is selected, show CreateQuiz component
  if (currentView === 'create') {
    return (
      <div className="dashboard-page">
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
          {renderSidebar()}
        </aside>
        <main className="dashboard-main">
          <CreateQuiz />
        </main>
      </div>
    );
  }

  // If browse view is selected, show BrowseQuizzes component
  if (currentView === 'browse') {
    return (
      <div className="dashboard-page">
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
          {renderSidebar()}
        </aside>
        <main className="dashboard-main">
          <BrowseQuizzes />
        </main>
      </div>
    );
  }

  const renderSidebar = () => (
    <>
      <nav className="sidebar-nav">
        <a 
          onClick={() => navigateTo('dashboard')} 
          className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
        >
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </a>
        <a 
          onClick={() => navigateTo('quiz')} 
          className={`nav-item ${currentView === 'quiz' ? 'active' : ''}`}
        >
          <span className="nav-icon">📝</span>
          <span className="nav-text">Take Quiz</span>
        </a>
        <a 
          onClick={() => navigateTo('myquizzes')} 
          className={`nav-item ${currentView === 'myquizzes' ? 'active' : ''}`}
        >
          <span className="nav-icon">📚</span>
          <span className="nav-text">My Quizzes</span>
        </a>
        <a 
          onClick={() => navigateTo('browse')} 
          className={`nav-item ${currentView === 'browse' ? 'active' : ''}`}
        >
          <span className="nav-icon">🔍</span>
          <span className="nav-text">Browse</span>
        </a>
        <a 
          onClick={() => navigateTo('leaderboard')} 
          className={`nav-item ${currentView === 'leaderboard' ? 'active' : ''}`}
        >
          <span className="nav-icon">🏆</span>
          <span className="nav-text">Leaderboard</span>
        </a>
        <a 
          onClick={() => navigateTo('create')} 
          className={`nav-item ${currentView === 'create' ? 'active' : ''}`}
        >
          <span className="nav-icon">➕</span>
          <span className="nav-text">Create Quiz</span>
        </a>
        <a 
          onClick={() => navigateTo('profile')} 
          className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-text">Profile</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <a onClick={handleLogout} className="nav-item logout">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </a>
      </div>
    </>
  );

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
          <a 
            onClick={() => navigateTo('dashboard')} 
            className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboard</span>
          </a>
          <a 
            onClick={() => navigateTo('quiz')} 
            className={`nav-item ${currentView === 'quiz' ? 'active' : ''}`}
          >
            <span className="nav-icon">📝</span>
            <span className="nav-text">Take Quiz</span>
          </a>
          <a 
            onClick={() => navigateTo('myquizzes')} 
            className={`nav-item ${currentView === 'myquizzes' ? 'active' : ''}`}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-text">My Quizzes</span>
          </a>
          <a 
            onClick={() => navigateTo('browse')} 
            className={`nav-item ${currentView === 'browse' ? 'active' : ''}`}
          >
            <span className="nav-icon">🔍</span>
            <span className="nav-text">Browse</span>
          </a>
          <a 
            onClick={() => navigateTo('leaderboard')} 
            className={`nav-item ${currentView === 'leaderboard' ? 'active' : ''}`}
          >
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Leaderboard</span>
          </a>
          <a 
            onClick={() => navigateTo('create')} 
            className={`nav-item ${currentView === 'create' ? 'active' : ''}`}
          >
            <span className="nav-icon">➕</span>
            <span className="nav-text">Create Quiz</span>
          </a>
          <a 
            onClick={() => navigateTo('profile')} 
            className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
          >
            <span className="nav-icon">👤</span>
            <span className="nav-text">Profile</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a onClick={handleLogout} className="nav-item logout">
            <span className="nav-icon">🚪</span>
            <span className="nav-text">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {currentView === 'dashboard' && (
          <>
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
                  <div className="avatar-placeholder">
                    {userName.charAt(0)}
                  </div>
                </div>
              </div>
            </header>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon purple">📚</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.totalCompleted}</div>
                  <div className="stat-label">Quizzes Completed</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">⭐</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.averageScore}</div>
                  <div className="stat-label">Average Score</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">🔥</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.streak}</div>
                  <div className="stat-label">Day Streak</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon blue">🏅</div>
                <div className="stat-info">
                  <div className="stat-value">#{stats.rank || '—'}</div>
                  <div className="stat-label">Global Rank</div>
                </div>
              </div>
            </div>

            {/* MERN Stack Quizzes */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">🎯 MERN Stack Quizzes</h2>
                <button onClick={() => navigateTo('quiz')} className="section-link">
                  View All →
                </button>
              </div>

              <div className="quiz-cards">
                <div className="quiz-card mern-card" onClick={() => navigateTo('quiz')}>
                  <div className="quiz-card-header">
                    <span className="quiz-badge mongodb">MongoDB</span>
                    <span className="quiz-icon">🍃</span>
                  </div>
                  <h3 className="quiz-card-title">MongoDB Fundamentals</h3>
                  <p className="quiz-card-description">Master NoSQL database concepts and queries</p>
                  <div className="quiz-card-footer">
                    <span className="quiz-info">📝 5 questions</span>
                    <button className="quiz-start-btn mongodb-btn">Start →</button>
                  </div>
                </div>

                <div className="quiz-card mern-card" onClick={() => navigateTo('quiz')}>
                  <div className="quiz-card-header">
                    <span className="quiz-badge express">Express.js</span>
                    <span className="quiz-icon">⚡</span>
                  </div>
                  <h3 className="quiz-card-title">Express.js Essentials</h3>
                  <p className="quiz-card-description">Learn backend routing and middleware</p>
                  <div className="quiz-card-footer">
                    <span className="quiz-info">📝 5 questions</span>
                    <button className="quiz-start-btn express-btn">Start →</button>
                  </div>
                </div>

                <div className="quiz-card mern-card" onClick={() => navigateTo('quiz')}>
                  <div className="quiz-card-header">
                    <span className="quiz-badge react">React</span>
                    <span className="quiz-icon">⚛️</span>
                  </div>
                  <h3 className="quiz-card-title">React Fundamentals</h3>
                  <p className="quiz-card-description">Test your knowledge of hooks and components</p>
                  <div className="quiz-card-footer">
                    <span className="quiz-info">📝 5 questions</span>
                    <button className="quiz-start-btn react-btn">Start →</button>
                  </div>
                </div>

                <div className="quiz-card mern-card" onClick={() => navigateTo('quiz')}>
                  <div className="quiz-card-header">
                    <span className="quiz-badge node">Node.js</span>
                    <span className="quiz-icon">🟢</span>
                  </div>
                  <h3 className="quiz-card-title">Node.js Basics</h3>
                  <p className="quiz-card-description">Explore async programming and modules</p>
                  <div className="quiz-card-footer">
                    <span className="quiz-info">📝 5 questions</span>
                    <button className="quiz-start-btn node-btn">Start →</button>
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
                {recentQuizzes.length > 0 ? (
                  recentQuizzes.map((quiz, index) => (
                    <div key={quiz.id} className="activity-item">
                      <div className={`activity-icon ${quiz.passed ? 'success' : 'failed'}`}>
                        {quiz.passed ? '✓' : '✗'}
                      </div>
                      <div className="activity-content">
                        <div className="activity-title">
                          Completed "{quiz.topic}" - {quiz.score}%
                        </div>
                        <div className="activity-time">
                          {new Date(quiz.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="activity-score">
                        {quiz.passed ? `+${quiz.score} pts` : 'Try again'}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="activity-empty">
                    <p>No recent activity. Take a quiz to get started!</p>
                  </div>
                )}
                
                {stats.streak > 0 && (
                  <div className="activity-item">
                    <div className="activity-icon fire">🔥</div>
                    <div className="activity-content">
                      <div className="activity-title">{stats.streak}-day streak!</div>
                      <div className="activity-time">Keep it going!</div>
                    </div>
                    <div className="activity-score">Streak</div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {currentView === 'leaderboard' && (
          <div className="leaderboard-view">
            <h2 className="view-title">🏆 Leaderboard</h2>
            <div className="leaderboard-list">
              <div className="leaderboard-item rank-1">
                <div className="rank-badge gold">🥇</div>
                <div className="user-info">
                  <div className="user-name">CodeMaster</div>
                  <div className="user-stats">850 pts • 45 quizzes</div>
                </div>
                <div className="user-score">850</div>
              </div>
              <div className="leaderboard-item rank-2">
                <div className="rank-badge silver">🥈</div>
                <div className="user-info">
                  <div className="user-name">ReactPro</div>
                  <div className="user-stats">820 pts • 42 quizzes</div>
                </div>
                <div className="user-score">820</div>
              </div>
              <div className="leaderboard-item rank-3">
                <div className="rank-badge bronze">🥉</div>
                <div className="user-info">
                  <div className="user-name">NodeNinja</div>
                  <div className="user-stats">800 pts • 40 quizzes</div>
                </div>
                <div className="user-score">800</div>
              </div>
              <div className="leaderboard-item current-user">
                <div className="rank-number">12</div>
                <div className="user-info">
                  <div className="user-name">{userName} (You)</div>
                  <div className="user-stats">750 pts • 35 quizzes</div>
                </div>
                <div className="user-score">750</div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'profile' && (
          <div className="profile-view">
            <h2 className="view-title">👤 Profile Settings</h2>
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-large">{userName.charAt(0)}</div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{userName}</h3>
                <p className="profile-email">wizard@quizzard.com</p>
                <div className="profile-stats-row">
                  <div className="profile-stat">
                    <span className="stat-num">24</span>
                    <span className="stat-text">Quizzes</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-num">850</span>
                    <span className="stat-text">Points</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-num">7</span>
                    <span className="stat-text">Streak</span>
                  </div>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
          </div>
        )}
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
          cursor: pointer;
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

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 20px;
          font-family: 'Fredoka', sans-serif;
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

        .stat-icon.purple { background: rgba(102, 126, 234, 0.1); }
        .stat-icon.green { background: rgba(72, 187, 120, 0.1); }
        .stat-icon.orange { background: rgba(237, 137, 54, 0.1); }
        .stat-icon.blue { background: rgba(66, 153, 225, 0.1); }

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
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
        }

        .section-link:hover {
          color: #764ba2;
        }

        /* Quiz Cards */
        .quiz-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .quiz-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          cursor: pointer;
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
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .quiz-badge.mongodb {
          background: rgba(71, 162, 72, 0.1);
          color: #47A248;
        }

        .quiz-badge.express {
          background: rgba(0, 0, 0, 0.1);
          color: #000;
        }

        .quiz-badge.react {
          background: rgba(97, 218, 251, 0.1);
          color: #61DAFB;
        }

        .quiz-badge.node {
          background: rgba(51, 153, 51, 0.1);
          color: #339933;
        }

        .quiz-icon {
          font-size: 32px;
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

        /* Feature Placeholder */
        .feature-placeholder {
          background: white;
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .placeholder-icon {
          font-size: 80px;
          margin-bottom: 1.5rem;
        }

        .placeholder-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .placeholder-text {
          color: #718096;
          font-size: 18px;
          margin-bottom: 2rem;
        }

        .placeholder-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Fredoka', sans-serif;
          font-size: 16px;
          transition: all 0.3s;
        }

        .placeholder-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Leaderboard View */
        .leaderboard-view, .profile-view {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .view-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 2rem;
        }

        .leaderboard-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: #f7fafc;
          border-radius: 15px;
          transition: all 0.3s;
        }

        .leaderboard-item:hover {
          transform: translateX(5px);
          background: #edf2f7;
        }

        .leaderboard-item.current-user {
          border: 2px solid #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        .rank-badge {
          font-size: 32px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rank-number {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #667eea;
          width: 60px;
          text-align: center;
        }

        .user-info {
          flex: 1;
        }

        .user-name {
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.25rem;
          font-size: 18px;
        }

        .user-stats {
          font-size: 14px;
          color: #718096;
        }

        .user-score {
          font-family: 'Fredoka', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #667eea;
        }

        /* Profile View */
        .profile-card {
          display: flex;
          gap: 3rem;
          padding: 2rem;
          background: #f7fafc;
          border-radius: 20px;
        }

        .profile-avatar {
          flex-shrink: 0;
        }

        .avatar-large {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 64px;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          font-family: 'Fredoka', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .profile-email {
          color: #718096;
          margin-bottom: 2rem;
        }

        .profile-stats-row {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .profile-stat {
          text-align: center;
        }

        .stat-num {
          display: block;
          font-family: 'Fredoka', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.25rem;
        }

        .stat-text {
          font-size: 14px;
          color: #718096;
        }

        .edit-profile-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Fredoka', sans-serif;
          transition: all 0.3s;
        }

        .edit-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sidebar {
            width: 80px;
          }

          .sidebar-brand, .nav-text {
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

          .profile-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
