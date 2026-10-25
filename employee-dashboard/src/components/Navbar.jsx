import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Employee Portal</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline font-medium">Home</Link>
          <Link to="/employee-form" className="hover:underline font-medium">Employee Form</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;