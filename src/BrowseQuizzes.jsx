import React, { useState } from 'react';

export default function BrowseQuizzes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🌐', count: 42 },
    { id: 'mongodb', name: 'MongoDB', icon: '🍃', count: 12 },
    { id: 'express', name: 'Express.js', icon: '⚡', count: 8 },
    { id: 'react', name: 'React', icon: '⚛️', count: 15 },
    { id: 'node', name: 'Node.js', icon: '🟢', count: 7 }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'MongoDB Advanced Aggregation',
      description: 'Master complex MongoDB aggregation pipelines and operations',
      category: 'mongodb',
      icon: '🍃',
      difficulty: 'Advanced',
      questions: 10,
      duration: '15 min',
      rating: 4.8,
      attempts: 1240,
      author: 'CodeMaster',
      tags: ['aggregation', 'pipelines', 'advanced']
    },
    {
      id: 2,
      title: 'React Hooks Deep Dive',
      description: 'Comprehensive guide to useState, useEffect, useContext and custom hooks',
      category: 'react',
      icon: '⚛️',
      difficulty: 'Intermediate',
      questions: 12,
      duration: '18 min',
      rating: 4.9,
      attempts: 2340,
      author: 'ReactPro',
      tags: ['hooks', 'state', 'effects']
    },
    {
      id: 3,
      title: 'Express Middleware Mastery',
      description: 'Understanding and creating custom middleware in Express.js',
      category: 'express',
      icon: '⚡',
      difficulty: 'Intermediate',
      questions: 8,
      duration: '12 min',
      rating: 4.7,
      attempts: 890,
      author: 'BackendNinja',
      tags: ['middleware', 'routing', 'express']
    },
    {
      id: 4,
      title: 'Node.js Streams & Buffers',
      description: 'Work with streams, buffers, and file system operations',
      category: 'node',
      icon: '🟢',
      difficulty: 'Advanced',
      questions: 15,
      duration: '20 min',
      rating: 4.6,
      attempts: 560,
      author: 'NodeExpert',
      tags: ['streams', 'buffers', 'async']
    },
    {
      id: 5,
      title: 'MongoDB Indexing Strategies',
      description: 'Optimize your queries with proper indexing techniques',
      category: 'mongodb',
      icon: '🍃',
      difficulty: 'Intermediate',
      questions: 10,
      duration: '15 min',
      rating: 4.7,
      attempts: 780,
      author: 'DBWizard',
      tags: ['indexing', 'performance', 'optimization']
    },
    {
      id: 6,
      title: 'React Performance Optimization',
      description: 'Learn useMemo, useCallback, and React.memo for better performance',
      category: 'react',
      icon: '⚛️',
      difficulty: 'Advanced',
      questions: 10,
      duration: '15 min',
      rating: 4.8,
      attempts: 1520,
      author: 'ReactPro',
      tags: ['performance', 'optimization', 'memoization']
    }
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#48bb78';
      case 'Intermediate': return '#ed8936';
      case 'Advanced': return '#e53e3e';
      default: return '#667eea';
    }
  };

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1 className="page-title">🔍 Browse Quizzes</h1>
        <p className="page-subtitle">Discover and take quizzes from the community</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search quizzes by title, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h3 className="categories-title">Categories</h3>
        <div className="categories-grid">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-card ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-bar">
        <span className="results-count">
          {filteredQuizzes.length} {filteredQuizzes.length === 1 ? 'quiz' : 'quizzes'} found
        </span>
        <select className="sort-select">
          <option value="popular">Most Popular</option>
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rated</option>
          <option value="difficulty">By Difficulty</option>
        </select>
      </div>

      {/* Quizzes Grid */}
      <div className="quizzes-grid">
        {filteredQuizzes.map(quiz => (
          <div key={quiz.id} className="quiz-browse-card">
            <div className="quiz-card-top">
              <div className="quiz-icon-large">{quiz.icon}</div>
              <div 
                className="difficulty-badge"
                style={{ background: `${getDifficultyColor(quiz.difficulty)}20`, color: getDifficultyColor(quiz.difficulty) }}
              >
                {quiz.difficulty}
              </div>
            </div>

            <h3 className="quiz-browse-title">{quiz.title}</h3>
            <p className="quiz-browse-description">{quiz.description}</p>

            <div className="quiz-tags">
              {quiz.tags.map((tag, index) => (
                <span key={index} className="quiz-tag">#{tag}</span>
              ))}
            </div>

            <div className="quiz-meta">
              <div className="meta-item">
                <span className="meta-icon">📝</span>
                <span>{quiz.questions} questions</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span>{quiz.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span>{quiz.rating}</span>
              </div>
            </div>

            <div className="quiz-card-footer">
              <div className="author-info">
                <div className="author-avatar">{quiz.author.charAt(0)}</div>
                <div className="author-details">
                  <div className="author-name">{quiz.author}</div>
                  <div className="author-attempts">{quiz.attempts} attempts</div>
                </div>
              </div>
              <button className="take-quiz-btn">
                Start Quiz →
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3 className="no-results-title">No quizzes found</h3>
          <p className="no-results-text">
            Try different search terms or browse all categories
          </p>
          <button 
            className="reset-filters-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      <style>{`
        .browse-container {
          padding: 2rem;
        }

        .browse-header {
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

        .search-section {
          margin-bottom: 2rem;
        }

        .search-box {
          background: white;
          padding: 1rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .search-icon {
          font-size: 20px;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          font-family: 'Outfit', sans-serif;
          color: #2d3748;
        }

        .search-input::placeholder {
          color: #a0aec0;
        }

        .clear-search {
          background: #edf2f7;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          color: #718096;
        }

        .clear-search:hover {
          background: #e2e8f0;
          color: #2d3748;
        }

        .categories-section {
          margin-bottom: 2rem;
        }

        .categories-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }

        .category-card {
          background: white;
          border: 2px solid #e2e8f0;
          padding: 1.25rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Outfit', sans-serif;
        }

        .category-card:hover {
          border-color: #667eea;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .category-card.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          color: white;
        }

        .category-icon {
          font-size: 32px;
        }

        .category-name {
          font-weight: 600;
          font-size: 14px;
        }

        .category-count {
          font-size: 12px;
          opacity: 0.8;
        }

        .results-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .results-count {
          font-weight: 600;
          color: #2d3748;
        }

        .sort-select {
          border: 2px solid #e2e8f0;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          background: white;
          color: #2d3748;
          font-weight: 500;
        }

        .sort-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .quizzes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .quiz-browse-card {
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quiz-browse-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .quiz-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .quiz-icon-large {
          font-size: 48px;
        }

        .difficulty-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .quiz-browse-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
        }

        .quiz-browse-description {
          color: #718096;
          font-size: 14px;
          line-height: 1.5;
        }

        .quiz-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .quiz-tag {
          background: #edf2f7;
          color: #667eea;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .quiz-meta {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
          border-top: 1px solid #edf2f7;
          border-bottom: 1px solid #edf2f7;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 14px;
          color: #718096;
        }

        .meta-icon {
          font-size: 16px;
        }

        .quiz-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
        }

        .author-name {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }

        .author-attempts {
          font-size: 12px;
          color: #a0aec0;
        }

        .take-quiz-btn {
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

        .take-quiz-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .no-results {
          background: white;
          padding: 4rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .no-results-icon {
          font-size: 64px;
          margin-bottom: 1rem;
        }

        .no-results-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .no-results-text {
          color: #718096;
          margin-bottom: 2rem;
        }

        .reset-filters-btn {
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

        .reset-filters-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .browse-container {
            padding: 1rem;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .quizzes-grid {
            grid-template-columns: 1fr;
          }

          .results-bar {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
