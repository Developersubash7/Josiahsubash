import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-blue-800 text-white">
    <a href="/" className="text-2xl font-bold">MyLogo</a>
    <ul className="flex space-x-4">
      <li><a href="/" className="hover:underline">Home</a></li>
      <li><a href="/about" className="hover:underline">About</a></li>
      <li><a href="/contact" className="hover:underline">Contact</a></li>
    </ul>
    <a href="/login" className="ml-4 bg-white text-blue-800 px-2 py-1 rounded">Login</a>
  </nav>
);

export default Navbar;
