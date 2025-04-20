import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: '#0f172a',
      color: '#ffffff',
      padding: '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>BreatheSafe</div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/input" style={linkStyle}>Predict AQI</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.3s',
  position: 'relative'
};

export default Navbar;
