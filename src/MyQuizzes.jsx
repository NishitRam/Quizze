import React, { useState } from 'react';
import { useQuiz } from './QuizContext';

export default function MyQuizzes() {
  const { quizHistory } = useQuiz();
  const [filter, setFilter] = useState('all');

  const filteredQuizzes = filter === 'all' 
    ? quizHistory 
    : filter === 'passed'
    ? quizHistory.filter(q => q.passed)
    : quizHistory.filter(q => !q.passed);

  const totalCompleted = quizHistory.length;
  const totalPassed = quizHistory.filter(q => q.passed).length;
  const averageScore = Math.round(quizHistory.reduce((acc, q) => acc + q.score, 0) / quizHistory.length);

  return (
    <div className="my-quizzes-container">
      <div className="my-quizzes-header">
        <h1 className="page-title">📚 My Quizzes</h1>
        <p className="page-subtitle">Track your learning progress and review past quizzes</p>
      </div>

      {/* Stats Overview */}
      <div className="quiz-stats-grid">
        <div className="quiz-stat-card">
          <div className="stat-icon-box purple">📝</div>
          <div className="stat-details">
            <div className="stat-number">{totalCompleted}</div>
            <div className="stat-text">Total Completed</div>
          </div>
        </div>
        <div className="quiz-stat-card">
          <div className="stat-icon-box green">✓</div>
          <div className="stat-details">
            <div className="stat-number">{totalPassed}</div>
            <div className="stat-text">Passed</div>
          </div>
        </div>
        <div className="quiz-stat-card">
          <div className="stat-icon-box orange">📊</div>
          <div className="stat-details">
            <div className="stat-number">{averageScore}%</div>
            <div className="stat-text">Average Score</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Quizzes ({quizHistory.length})
        </button>
        <button 
          className={`filter-tab ${filter === 'passed' ? 'active' : ''}`}
          onClick={() => setFilter('passed')}
        >
          Passed ({quizHistory.filter(q => q.passed).length})
        </button>
        <button 
          className={`filter-tab ${filter === 'failed' ? 'active' : ''}`}
          onClick={() => setFilter('failed')}
        >
          Need Review ({quizHistory.filter(q => !q.passed).length})
        </button>
      </div>

      {/* Quiz History List */}
      <div className="quiz-history-list">
        {filteredQuizzes.map(quiz => (
          <div key={quiz.id} className="quiz-history-item">
            <div className="quiz-history-icon" style={{ background: `${quiz.color}20`, color: quiz.color }}>
              {quiz.icon}
            </div>
            <div className="quiz-history-content">
              <div className="quiz-history-title">{quiz.topic}</div>
              <div className="quiz-history-details">
                <span className="detail-item">
                  <span className="detail-icon">📝</span>
                  {quiz.correctAnswers}/{quiz.totalQuestions} correct
                </span>
                <span className="detail-item">
                  <span className="detail-icon">⏱️</span>
                  {quiz.timeTaken}
                </span>
                <span className="detail-item">
                  <span className="detail-icon">📅</span>
                  {new Date(quiz.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="quiz-history-score">
              <div className={`score-badge ${quiz.passed ? 'passed' : 'failed'}`}>
                {quiz.score}%
              </div>
              <button className="retry-quiz-btn">
                🔄 Retry
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3 className="empty-title">No quizzes found</h3>
          <p className="empty-text">Try a different filter or take a new quiz!</p>
        </div>
      )}

      <style>{`
        .my-quizzes-container {
          padding: 2rem;
        }

        .my-quizzes-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #718096;
          font-size: 16px;
        }

        .quiz-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .quiz-stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .quiz-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .stat-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .stat-icon-box.purple { background: rgba(102, 126, 234, 0.1); }
        .stat-icon-box.green { background: rgba(72, 187, 120, 0.1); }
        .stat-icon-box.orange { background: rgba(237, 137, 54, 0.1); }

        .stat-number {
          font-family: 'Fredoka', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
        }

        .stat-text {
          font-size: 13px;
          color: #718096;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          background: white;
          padding: 1rem;
          border-radius: 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .filter-tab {
          flex: 1;
          padding: 0.875rem 1.5rem;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 10px;
          font-weight: 600;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Outfit', sans-serif;
        }

        .filter-tab:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
        }

        .quiz-history-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quiz-history-item {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .quiz-history-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .quiz-history-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          flex-shrink: 0;
        }

        .quiz-history-content {
          flex: 1;
        }

        .quiz-history-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .quiz-history-details {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 14px;
          color: #718096;
        }

        .detail-icon {
          font-size: 16px;
        }

        .quiz-history-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .score-badge {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          min-width: 80px;
          text-align: center;
        }

        .score-badge.passed {
          background: rgba(72, 187, 120, 0.1);
          color: #48bb78;
        }

        .score-badge.failed {
          background: rgba(245, 101, 101, 0.1);
          color: #f56565;
        }

        .retry-quiz-btn {
          background: #edf2f7;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .retry-quiz-btn:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        .empty-state {
          background: white;
          padding: 4rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 1rem;
        }

        .empty-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .empty-text {
          color: #718096;
        }

        @media (max-width: 768px) {
          .my-quizzes-container {
            padding: 1rem;
          }

          .quiz-stats-grid {
            grid-template-columns: 1fr;
          }

          .filter-tabs {
            flex-direction: column;
          }

          .quiz-history-item {
            flex-direction: column;
            text-align: center;
          }

          .quiz-history-score {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
