import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function RutaProtegida({ children, requiredRole = null }) {
    const { isAuth, role } = useAuth(); 

     if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && role !== requiredRole ){
    return <Navigate to= "/" replace />
  }
  return children;
}
export default RutaProtegida;
 