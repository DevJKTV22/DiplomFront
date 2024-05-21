import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return 'guest';
    }
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch (error) {
    console.error(error);
    return 'guest';
  }
};

const PrivateRoute = ({ element, allowedRoles }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getProfile();
      setRole(role);
      setLoading(false);
      
    };

    fetchRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return allowedRoles.includes(role) ? element : <Navigate to="/" />;
};

export default PrivateRoute;