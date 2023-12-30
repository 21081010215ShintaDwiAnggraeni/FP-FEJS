
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const LogoutUser = () => {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem('authToken');

    navigate('/login');
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutUser;
