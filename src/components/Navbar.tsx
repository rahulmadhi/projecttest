import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Film, Building2 } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!currentUser) return null;

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/movies" className="flex items-center text-white gap-2">
              <Film className="h-6 w-6" />
              <span className="font-medium">Movies</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/company-info"
              className="text-white hover:text-gray-200 flex items-center gap-2"
            >
              <Building2 className="h-5 w-5" />
              <span>Company Info</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-200 flex items-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}