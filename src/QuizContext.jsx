import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const QuizContext = createContext();

// Custom hook to use the quiz context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

// Quiz Provider Component
export const QuizProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('quizzardUser');
    return saved ? JSON.parse(saved) : {
      id: 'user_001',
      name: 'Wizard',
      email: 'wizard@quizzard.com',
      avatar: 'W',
      joinDate: new Date().toISOString()
    };
  });

  // Quiz History State
  const [quizHistory, setQuizHistory] = useState(() => {
    const saved = localStorage.getItem('quizzardHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // User Stats State
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('quizzardStats');
    return saved ? JSON.parse(saved) : {
      totalQuizzes: 0,
      totalScore: 0,
      streak: 0,
      rank: 0,
      lastQuizDate: null
    };
  });

  // Current Quiz State
  const [currentQuiz, setCurrentQuiz] = useState(null);

  // Leaderboard State
  const [leaderboard, setLeaderboard] = useState(() => {
    const saved = localStorage.getItem('quizzardLeaderboard');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'CodeMaster', score: 850, quizzes: 45, rank: 1 },
      { id: 2, name: 'ReactPro', score: 820, quizzes: 42, rank: 2 },
      { id: 3, name: 'NodeNinja', score: 800, quizzes: 40, rank: 3 }
    ];
  });

  // Created Quizzes State (user's own quizzes)
  const [createdQuizzes, setCreatedQuizzes] = useState(() => {
    const saved = localStorage.getItem('quizzardCreated');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('quizzardUser', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('quizzardHistory', JSON.stringify(quizHistory));
  }, [quizHistory]);

  useEffect(() => {
    localStorage.setItem('quizzardStats', JSON.stringify(userStats));
  }, [userStats]);

  useEffect(() => {
    localStorage.setItem('quizzardLeaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  useEffect(() => {
    localStorage.setItem('quizzardCreated', JSON.stringify(createdQuizzes));
  }, [createdQuizzes]);

  // Add quiz result to history
  const addQuizResult = (quizData) => {
    const newResult = {
      id: Date.now(),
      topic: quizData.topic,
      icon: quizData.icon,
      color: quizData.color,
      score: quizData.score,
      totalQuestions: quizData.totalQuestions,
      correctAnswers: quizData.correctAnswers,
      date: new Date().toISOString(),
      timeTaken: quizData.timeTaken,
      passed: quizData.score >= 60
    };

    setQuizHistory(prev => [newResult, ...prev]);

    // Update stats
    setUserStats(prev => ({
      totalQuizzes: prev.totalQuizzes + 1,
      totalScore: prev.totalScore + quizData.score,
      streak: calculateStreak([newResult, ...quizHistory]),
      rank: calculateRank(prev.totalScore + quizData.score),
      lastQuizDate: new Date().toISOString()
    }));

    // Update leaderboard
    updateLeaderboard(quizData.score);
  };

  // Calculate streak
  const calculateStreak = (history) => {
    if (history.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < history.length; i++) {
      const quizDate = new Date(history[i].date);
      quizDate.setHours(0, 0, 0, 0);
      
      const dayDiff = Math.floor((today - quizDate) / (1000 * 60 * 60 * 24));
      
      if (dayDiff === i) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  // Calculate rank based on score
  const calculateRank = (totalScore) => {
    const sorted = [...leaderboard, { score: totalScore }]
      .sort((a, b) => b.score - a.score);
    return sorted.findIndex(item => item.score === totalScore) + 1;
  };

  // Update leaderboard
  const updateLeaderboard = (newScore) => {
    setLeaderboard(prev => {
      const userEntry = prev.find(entry => entry.name === user.name);
      
      if (userEntry) {
        // Update existing user
        return prev.map(entry => 
          entry.name === user.name 
            ? { ...entry, score: entry.score + newScore, quizzes: entry.quizzes + 1 }
            : entry
        ).sort((a, b) => b.score - a.score)
         .map((entry, index) => ({ ...entry, rank: index + 1 }));
      } else {
        // Add new user
        const newEntry = {
          id: prev.length + 1,
          name: user.name,
          score: newScore,
          quizzes: 1,
          rank: 0
        };
        return [...prev, newEntry]
          .sort((a, b) => b.score - a.score)
          .map((entry, index) => ({ ...entry, rank: index + 1 }));
      }
    });
  };

  // Add created quiz
  const addCreatedQuiz = (quizData) => {
    const newQuiz = {
      id: Date.now(),
      ...quizData,
      author: user.name,
      createdAt: new Date().toISOString(),
      attempts: 0,
      rating: 0
    };

    setCreatedQuizzes(prev => [newQuiz, ...prev]);
    return newQuiz;
  };

  // Update user profile
  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  // Clear all data (reset)
  const clearAllData = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem('quizzardUser');
      localStorage.removeItem('quizzardHistory');
      localStorage.removeItem('quizzardStats');
      localStorage.removeItem('quizzardLeaderboard');
      localStorage.removeItem('quizzardCreated');
      
      setUser({
        id: 'user_001',
        name: 'Wizard',
        email: 'wizard@quizzard.com',
        avatar: 'W',
        joinDate: new Date().toISOString()
      });
      setQuizHistory([]);
      setUserStats({
        totalQuizzes: 0,
        totalScore: 0,
        streak: 0,
        rank: 0,
        lastQuizDate: null
      });
      setLeaderboard([
        { id: 1, name: 'CodeMaster', score: 850, quizzes: 45, rank: 1 },
        { id: 2, name: 'ReactPro', score: 820, quizzes: 42, rank: 2 },
        { id: 3, name: 'NodeNinja', score: 800, quizzes: 40, rank: 3 }
      ]);
      setCreatedQuizzes([]);
    }
  };

  // Get statistics
  const getStats = () => {
    const totalCompleted = quizHistory.length;
    const totalPassed = quizHistory.filter(q => q.passed).length;
    const averageScore = totalCompleted > 0 
      ? Math.round(quizHistory.reduce((acc, q) => acc + q.score, 0) / totalCompleted)
      : 0;
    const passRate = totalCompleted > 0 
      ? Math.round((totalPassed / totalCompleted) * 100)
      : 0;

    return {
      totalCompleted,
      totalPassed,
      averageScore,
      passRate,
      streak: userStats.streak,
      rank: userStats.rank
    };
  };

  // Get quiz by topic
  const getQuizzesByTopic = (topic) => {
    return quizHistory.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
  };

  // Get recent quizzes
  const getRecentQuizzes = (limit = 5) => {
    return quizHistory.slice(0, limit);
  };

  const value = {
    // State
    user,
    quizHistory,
    userStats,
    currentQuiz,
    leaderboard,
    createdQuizzes,
    
    // Actions
    setUser: updateUser,
    setCurrentQuiz,
    addQuizResult,
    addCreatedQuiz,
    clearAllData,
    
    // Getters
    getStats,
    getQuizzesByTopic,
    getRecentQuizzes
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizContext;
