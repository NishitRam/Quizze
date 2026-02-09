import React, { useState } from 'react';

export default function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [quizCategory, setQuizCategory] = useState('mongodb');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    }
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        explanation: ''
      }
    ]);
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quiz created successfully! (This will connect to your backend)');
    console.log({
      title: quizTitle,
      description: quizDescription,
      category: quizCategory,
      questions
    });
  };

  return (
    <div className="create-quiz-container">
      <div className="create-quiz-header">
        <h1 className="page-title">➕ Create Custom Quiz</h1>
        <p className="page-subtitle">Design your own quiz and share it with the community</p>
      </div>

      <form onSubmit={handleSubmit} className="quiz-form">
        {/* Quiz Details */}
        <div className="form-section">
          <h3 className="section-title">📋 Quiz Details</h3>
          
          <div className="form-group">
            <label className="form-label">Quiz Title *</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="e.g., Advanced React Hooks"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              value={quizDescription}
              onChange={(e) => setQuizDescription(e.target.value)}
              placeholder="Brief description of what this quiz covers..."
              className="form-textarea"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category *</label>
            <select
              value={quizCategory}
              onChange={(e) => setQuizCategory(e.target.value)}
              className="form-select"
              required
            >
              <option value="mongodb">🍃 MongoDB</option>
              <option value="express">⚡ Express.js</option>
              <option value="react">⚛️ React</option>
              <option value="node">🟢 Node.js</option>
              <option value="javascript">📜 JavaScript</option>
              <option value="css">🎨 CSS</option>
              <option value="html">🌐 HTML</option>
            </select>
          </div>
        </div>

        {/* Questions */}
        <div className="form-section">
          <div className="section-header-row">
            <h3 className="section-title">❓ Questions ({questions.length})</h3>
            <button type="button" onClick={addQuestion} className="add-question-btn">
              + Add Question
            </button>
          </div>

          {questions.map((q, qIndex) => (
            <div key={q.id} className="question-card">
              <div className="question-header">
                <span className="question-number">Question {qIndex + 1}</span>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIndex)}
                    className="remove-question-btn"
                  >
                    🗑️ Remove
                  </button>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Question *</label>
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                  placeholder="Enter your question here..."
                  className="form-input"
                  required
                />
              </div>

              <div className="options-grid">
                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="option-group">
                    <label className="form-label">
                      Option {String.fromCharCode(65 + oIndex)} *
                      {q.correctAnswer === oIndex && (
                        <span className="correct-badge">✓ Correct</span>
                      )}
                    </label>
                    <div className="option-input-wrapper">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                        className="form-input"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                        className={`set-correct-btn ${q.correctAnswer === oIndex ? 'active' : ''}`}
                        title="Set as correct answer"
                      >
                        {q.correctAnswer === oIndex ? '✓' : '○'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label className="form-label">Explanation *</label>
                <textarea
                  value={q.explanation}
                  onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                  placeholder="Explain why this answer is correct..."
                  className="form-textarea"
                  rows="2"
                  required
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="form-actions">
          <button type="button" className="preview-btn">
            👁️ Preview Quiz
          </button>
          <button type="submit" className="submit-btn">
            🚀 Publish Quiz
          </button>
        </div>
      </form>

      <style>{`
        .create-quiz-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .create-quiz-header {
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

        .quiz-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .section-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1.5rem;
        }

        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .add-question-btn {
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

        .add-question-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          font-size: 14px;
        }

        .correct-badge {
          background: rgba(72, 187, 120, 0.1);
          color: #48bb78;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 12px;
          margin-left: 0.5rem;
          font-weight: 700;
        }

        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s;
          background: #f7fafc;
        }

        .form-input:focus, .form-textarea:focus, .form-select:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea {
          resize: vertical;
        }

        .question-card {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 15px;
          margin-bottom: 1.5rem;
          border: 2px solid #e2e8f0;
        }

        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .question-number {
          font-family: 'Fredoka', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #667eea;
        }

        .remove-question-btn {
          background: #fee;
          color: #e53e3e;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .remove-question-btn:hover {
          background: #fcc;
          transform: scale(1.05);
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .option-group {
          display: flex;
          flex-direction: column;
        }

        .option-input-wrapper {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .set-correct-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .set-correct-btn:hover {
          border-color: #48bb78;
          background: rgba(72, 187, 120, 0.1);
        }

        .set-correct-btn.active {
          background: #48bb78;
          border-color: #48bb78;
          color: white;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .preview-btn, .submit-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-family: 'Fredoka', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
        }

        .preview-btn {
          background: #edf2f7;
          color: #2d3748;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .preview-btn:hover, .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .create-quiz-container {
            padding: 1rem;
          }

          .options-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
          }

          .section-header-row {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .add-question-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
