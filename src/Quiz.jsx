import React, { useState, useEffect } from 'react';
import { useQuiz } from './QuizContext';

const MERN_QUIZZES = {
  mongodb: {
    title: "MongoDB Fundamentals",
    icon: "🍃",
    color: "#47A248",
    questions: [
      {
        id: 1,
        question: "What does MongoDB stand for?",
        options: [
          "Massive Object Relational Database",
          "Humongous Database",
          "Modern Database",
          "Multi Object Database"
        ],
        correct: 1,
        explanation: "MongoDB is derived from 'humongous', reflecting its ability to handle huge amounts of data."
      },
      {
        id: 2,
        question: "Which command is used to create a new database in MongoDB?",
        options: [
          "createDB()",
          "use database_name",
          "new Database()",
          "db.create()"
        ],
        correct: 1,
        explanation: "The 'use database_name' command creates a new database if it doesn't exist."
      },
      {
        id: 3,
        question: "What is a collection in MongoDB?",
        options: [
          "A group of databases",
          "A group of documents",
          "A group of fields",
          "A group of queries"
        ],
        correct: 1,
        explanation: "A collection is a group of MongoDB documents, similar to a table in relational databases."
      },
      {
        id: 4,
        question: "Which method is used to insert a document in MongoDB?",
        options: [
          "db.collection.add()",
          "db.collection.insert()",
          "db.collection.insertOne()",
          "db.collection.create()"
        ],
        correct: 2,
        explanation: "insertOne() is the modern method to insert a single document into a collection."
      },
      {
        id: 5,
        question: "What format does MongoDB use to store data?",
        options: [
          "XML",
          "JSON",
          "BSON",
          "CSV"
        ],
        correct: 2,
        explanation: "MongoDB stores data in BSON (Binary JSON) format, which is a binary representation of JSON."
      }
    ]
  },
  express: {
    title: "Express.js Essentials",
    icon: "⚡",
    color: "#000000",
    questions: [
      {
        id: 1,
        question: "What is Express.js?",
        options: [
          "A database",
          "A web framework for Node.js",
          "A frontend library",
          "A testing tool"
        ],
        correct: 1,
        explanation: "Express.js is a minimal and flexible Node.js web application framework."
      },
      {
        id: 2,
        question: "Which HTTP method is used to retrieve data?",
        options: [
          "POST",
          "PUT",
          "GET",
          "DELETE"
        ],
        correct: 2,
        explanation: "GET method is used to retrieve data from the server."
      },
      {
        id: 3,
        question: "What does app.use() do in Express?",
        options: [
          "Starts the server",
          "Mounts middleware",
          "Creates a route",
          "Connects to database"
        ],
        correct: 1,
        explanation: "app.use() is used to mount middleware functions in Express."
      },
      {
        id: 4,
        question: "Which object contains the request parameters?",
        options: [
          "req.body",
          "req.query",
          "req.params",
          "req.data"
        ],
        correct: 2,
        explanation: "req.params contains route parameters defined in the path."
      },
      {
        id: 5,
        question: "What is middleware in Express?",
        options: [
          "Database driver",
          "Functions that execute during request-response cycle",
          "Frontend components",
          "Routing system"
        ],
        correct: 1,
        explanation: "Middleware functions have access to request and response objects and can modify them."
      }
    ]
  },
  react: {
    title: "React Fundamentals",
    icon: "⚛️",
    color: "#61DAFB",
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A database",
          "A JavaScript library for building UIs",
          "A backend framework",
          "A CSS framework"
        ],
        correct: 1,
        explanation: "React is a JavaScript library for building user interfaces, maintained by Meta."
      },
      {
        id: 2,
        question: "What is a component in React?",
        options: [
          "A database table",
          "A reusable piece of UI",
          "A CSS class",
          "A server route"
        ],
        correct: 1,
        explanation: "Components are independent, reusable pieces of UI that can be composed together."
      },
      {
        id: 3,
        question: "What hook is used for state management?",
        options: [
          "useEffect",
          "useState",
          "useContext",
          "useReducer"
        ],
        correct: 1,
        explanation: "useState is the primary hook for managing state in functional components."
      },
      {
        id: 4,
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON Extension",
          "JavaScript Extra"
        ],
        correct: 0,
        explanation: "JSX stands for JavaScript XML, allowing HTML-like syntax in JavaScript."
      },
      {
        id: 5,
        question: "What is the Virtual DOM?",
        options: [
          "A real browser DOM",
          "A lightweight copy of the real DOM",
          "A database",
          "A server"
        ],
        correct: 1,
        explanation: "Virtual DOM is a lightweight copy that React uses to optimize DOM updates."
      }
    ]
  },
  node: {
    title: "Node.js Basics",
    icon: "🟢",
    color: "#339933",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A JavaScript framework",
          "A JavaScript runtime built on Chrome's V8 engine",
          "A database",
          "A frontend library"
        ],
        correct: 1,
        explanation: "Node.js is a JavaScript runtime that executes JavaScript code outside a browser."
      },
      {
        id: 2,
        question: "Which module is used to create a server in Node.js?",
        options: [
          "fs",
          "path",
          "http",
          "url"
        ],
        correct: 2,
        explanation: "The http module is used to create HTTP servers in Node.js."
      },
      {
        id: 3,
        question: "What does npm stand for?",
        options: [
          "Node Package Manager",
          "New Project Manager",
          "Node Program Module",
          "Network Package Manager"
        ],
        correct: 0,
        explanation: "npm is Node Package Manager, used to manage Node.js packages."
      },
      {
        id: 4,
        question: "What is package.json?",
        options: [
          "A JavaScript file",
          "A configuration file for Node.js projects",
          "A database file",
          "A CSS file"
        ],
        correct: 1,
        explanation: "package.json contains metadata about the project and its dependencies."
      },
      {
        id: 5,
        question: "What is async/await?",
        options: [
          "A loop structure",
          "A way to work with asynchronous code",
          "A database query",
          "A CSS property"
        ],
        correct: 1,
        explanation: "async/await is syntax for working with Promises in a synchronous-looking way."
      }
    ]
  }
};

export default function Quiz() {
  const { addQuizResult } = useQuiz();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleTimeout();
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const startQuiz = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
    setTimer(30);
    setTimerActive(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setTimerActive(false);

    const quiz = MERN_QUIZZES[selectedTopic];
    const isCorrect = answerIndex === quiz.questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 20);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selected: answerIndex,
      correct: quiz.questions[currentQuestion].correct,
      isCorrect
    }]);
  };

  const handleTimeout = () => {
    setShowExplanation(true);
    setTimerActive(false);
    setSelectedAnswer(null);
    
    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selected: null,
      correct: MERN_QUIZZES[selectedTopic].questions[currentQuestion].correct,
      isCorrect: false
    }]);
  };

  const nextQuestion = () => {
    const quiz = MERN_QUIZZES[selectedTopic];
    
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimer(30);
      setTimerActive(true);
    } else {
      // Save quiz result to context
      const totalTime = quiz.questions.length * 30; // Total time allocated
      const minutes = Math.floor(totalTime / 60);
      const seconds = totalTime % 60;
      
      addQuizResult({
        topic: quiz.title,
        icon: quiz.icon,
        color: quiz.color,
        score,
        totalQuestions: quiz.questions.length,
        correctAnswers: answeredQuestions.filter(q => q.isCorrect).length,
        timeTaken: `${minutes}:${seconds.toString().padStart(2, '0')}`
      });
      
      setQuizComplete(true);
      setTimerActive(false);
    }
  };

  const restartQuiz = () => {
    setSelectedTopic(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
    setTimer(30);
    setTimerActive(false);
  };

  if (!selectedTopic) {
    return (
      <div className="quiz-selection">
        <div className="quiz-header">
          <h1 className="quiz-main-title">🎯 MERN Stack Quiz</h1>
          <p className="quiz-subtitle">Test your knowledge on MongoDB, Express, React & Node.js</p>
        </div>

        <div className="topics-grid">
          {Object.entries(MERN_QUIZZES).map(([key, topic]) => (
            <div 
              key={key}
              className="topic-card"
              onClick={() => startQuiz(key)}
              style={{ borderColor: topic.color }}
            >
              <div className="topic-icon" style={{ background: `${topic.color}20` }}>
                <span style={{ fontSize: '48px' }}>{topic.icon}</span>
              </div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-info">{topic.questions.length} Questions</p>
              <button 
                className="start-topic-btn"
                style={{ background: topic.color }}
              >
                Start Quiz →
              </button>
            </div>
          ))}
        </div>

        <style>{`
          .quiz-selection {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
          }

          .quiz-header {
            text-align: center;
            color: white;
            margin-bottom: 3rem;
          }

          .quiz-main-title {
            font-family: 'Fredoka', sans-serif;
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          .quiz-subtitle {
            font-size: 20px;
            opacity: 0.95;
          }

          .topics-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .topic-card {
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            border: 3px solid transparent;
          }

          .topic-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .topic-icon {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }

          .topic-title {
            font-family: 'Fredoka', sans-serif;
            font-size: 24px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }

          .topic-info {
            color: #718096;
            margin-bottom: 1.5rem;
            font-size: 14px;
          }

          .start-topic-btn {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            font-family: 'Fredoka', sans-serif;
            cursor: pointer;
            transition: all 0.3s;
          }

          .start-topic-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .quiz-main-title {
              font-size: 32px;
            }

            .topics-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  const quiz = MERN_QUIZZES[selectedTopic];
  const question = quiz.questions[currentQuestion];

  if (quizComplete) {
    const percentage = (score / (quiz.questions.length * 20)) * 100;
    const passed = percentage >= 60;

    return (
      <div className="quiz-complete">
        <div className="result-card">
          <div className={`result-icon ${passed ? 'passed' : 'failed'}`}>
            {passed ? '🎉' : '📚'}
          </div>
          
          <h1 className="result-title">
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h1>
          
          <p className="result-subtitle">
            {passed 
              ? 'You passed the quiz!' 
              : 'Review the material and try again.'}
          </p>

          <div className="score-display">
            <div className="score-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10"/>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke={passed ? '#48bb78' : '#f56565'}
                  strokeWidth="10"
                  strokeDasharray={`${percentage * 2.827}, 282.7`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="score-text">
                <div className="score-number">{Math.round(percentage)}%</div>
                <div className="score-label">Score</div>
              </div>
            </div>
          </div>

          <div className="result-stats">
            <div className="stat-item">
              <div className="stat-value">{score}</div>
              <div className="stat-label">Points</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {answeredQuestions.filter(q => q.isCorrect).length}/{quiz.questions.length}
              </div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{quiz.questions.length * 30}s</div>
              <div className="stat-label">Time Limit</div>
            </div>
          </div>

          <div className="result-actions">
            <button className="retry-btn" onClick={() => startQuiz(selectedTopic)}>
              🔄 Retry Quiz
            </button>
            <button className="home-btn" onClick={restartQuiz}>
              🏠 Back to Topics
            </button>
          </div>
        </div>

        <style>{`
          .quiz-complete {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .result-card {
            background: white;
            border-radius: 30px;
            padding: 3rem;
            max-width: 600px;
            width: 100%;
            text-align: center;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          }

          .result-icon {
            font-size: 80px;
            margin-bottom: 1rem;
          }

          .result-title {
            font-family: 'Fredoka', sans-serif;
            font-size: 36px;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }

          .result-subtitle {
            color: #718096;
            font-size: 18px;
            margin-bottom: 2rem;
          }

          .score-display {
            margin: 2rem 0;
          }

          .score-circle {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            position: relative;
          }

          .score-circle svg {
            width: 100%;
            height: 100%;
            transform: rotate(0deg);
          }

          .score-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .score-number {
            font-family: 'Fredoka', sans-serif;
            font-size: 48px;
            font-weight: 700;
            color: #2d3748;
          }

          .score-label {
            font-size: 14px;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .result-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 2rem 0;
            padding: 2rem;
            background: #f7fafc;
            border-radius: 15px;
          }

          .stat-item {
            text-align: center;
          }

          .stat-value {
            font-family: 'Fredoka', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 0.25rem;
          }

          .stat-label {
            font-size: 12px;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .result-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
          }

          .retry-btn, .home-btn {
            flex: 1;
            padding: 1rem;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-family: 'Fredoka', sans-serif;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 16px;
          }

          .retry-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .home-btn {
            background: #edf2f7;
            color: #2d3748;
          }

          .retry-btn:hover, .home-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .result-stats {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .result-actions {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        {/* Header */}
        <div className="quiz-progress-header">
          <button className="back-btn" onClick={restartQuiz}>
            ← Back
          </button>
          <div className="progress-info">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
          </div>
          <div className={`timer ${timer <= 10 ? 'timer-warning' : ''}`}>
            ⏱️ {timer}s
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>

        {/* Score */}
        <div className="score-badge">
          <span className="score-icon">⭐</span>
          <span className="score-value">{score}</span>
        </div>

        {/* Question */}
        <div className="question-section">
          <h2 className="question-text">{question.question}</h2>
        </div>

        {/* Options */}
        <div className="options-grid">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const showResult = showExplanation;

            let className = 'option-btn';
            if (showResult) {
              if (isCorrect) className += ' correct';
              else if (isSelected) className += ' incorrect';
            } else if (isSelected) {
              className += ' selected';
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showResult && isCorrect && <span className="check-mark">✓</span>}
                {showResult && isSelected && !isCorrect && <span className="x-mark">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="explanation-box">
            <div className="explanation-header">
              <span className="bulb-icon">💡</span>
              <span>Explanation</span>
            </div>
            <p className="explanation-text">{question.explanation}</p>
            <button className="next-btn" onClick={nextQuestion}>
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'See Results'} →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Outfit:wght@400;500;600&display=swap');

        .quiz-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Outfit', sans-serif;
        }

        .quiz-box {
          background: white;
          border-radius: 30px;
          padding: 2.5rem;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .quiz-progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .back-btn {
          background: #edf2f7;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .back-btn:hover {
          background: #e2e8f0;
          transform: translateX(-3px);
        }

        .progress-info {
          font-weight: 600;
          color: #4a5568;
        }

        .timer {
          background: #48bb78;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
        }

        .timer-warning {
          background: #f56565;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s;
          border-radius: 10px;
        }

        .score-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
          color: #2d3748;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .score-icon {
          font-size: 20px;
        }

        .question-section {
          margin-bottom: 2.5rem;
        }

        .question-text {
          font-family: 'Fredoka', sans-serif;
          font-size: 28px;
          font-weight: 600;
          color: #2d3748;
          line-height: 1.4;
        }

        .options-grid {
          display: grid;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
          font-size: 16px;
          position: relative;
        }

        .option-btn:hover:not(:disabled) {
          transform: translateX(5px);
          border-color: #667eea;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .option-btn.selected {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .option-btn.correct {
          border-color: #48bb78;
          background: rgba(72, 187, 120, 0.1);
        }

        .option-btn.incorrect {
          border-color: #f56565;
          background: rgba(245, 101, 101, 0.1);
        }

        .option-btn:disabled {
          cursor: not-allowed;
        }

        .option-letter {
          width: 40px;
          height: 40px;
          background: #667eea;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
          flex-shrink: 0;
        }

        .option-btn.correct .option-letter {
          background: #48bb78;
        }

        .option-btn.incorrect .option-letter {
          background: #f56565;
        }

        .option-text {
          flex: 1;
          font-weight: 500;
          color: #2d3748;
        }

        .check-mark, .x-mark {
          font-size: 24px;
          font-weight: 700;
        }

        .check-mark {
          color: #48bb78;
        }

        .x-mark {
          color: #f56565;
        }

        .explanation-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          border-radius: 20px;
          color: white;
          animation: slideUp 0.5s;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .explanation-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 1rem;
        }

        .bulb-icon {
          font-size: 24px;
        }

        .explanation-text {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .next-btn {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          font-size: 16px;
        }

        .next-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .quiz-box {
            padding: 1.5rem;
          }

          .question-text {
            font-size: 22px;
          }

          .quiz-progress-header {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .option-btn {
            padding: 1rem;
          }

          .option-letter {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
