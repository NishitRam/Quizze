import { useState, useEffect } from 'react'
import LandingPage from './LandingPage'
import RegistrationForm from './RegistrationForm'
import QuizzardLanding from './QuizzardLanding'
import Dashboard from './Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'landing');
    };

    updatePage();
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  switch(currentPage) {
    case 'register':
      return <RegistrationForm />;
    case 'auth':
      return <QuizzardLanding />;
    case 'dashboard':
      return <Dashboard />;
    default:
      return <LandingPage />;
  }
}

export default App
