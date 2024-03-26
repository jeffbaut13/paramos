// RouteRedirector.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteRedirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const visitedHome = localStorage.getItem('visitedHome');
    const visitedOnboarding = localStorage.getItem('visitedOnboarding');

    if (visitedHome && visitedOnboarding) {
      navigate('/paramo');
    }
  }, [navigate]);

  return null;
};
