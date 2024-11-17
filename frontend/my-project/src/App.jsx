import { Routes, Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Sidebar from './components/Sidebar';
import Feature1 from './pages/Features';
import Hero from './pages/Hero';
import Dashboard from './pages/dashboard';

// Protected Component Wrapper
const ProtectedRoute = ({ children }) => {
  const ProtectedContent = withAuthenticationRequired(() => children);
  return <ProtectedContent />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <div>
            <Hero />
            <Feature1 />
          </div>
        }
      />

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div className="flex">
              <Sidebar />
              <Dashboard />
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
