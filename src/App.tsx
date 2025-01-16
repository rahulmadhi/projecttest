import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import MovieList from './components/MovieList';
import CompanyInfo from './components/CompanyInfo';
import Navbar from './components/Navbar';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />
        <Route
          path="/company-info"
          element={
            <PrivateRoute>
              <CompanyInfo />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;