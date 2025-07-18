
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />;
};

export default Index;
