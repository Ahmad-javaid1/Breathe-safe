import React from 'react';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer style={{
      background: '#0f172a',
      color: '#ffffff',
      padding: '2rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 -2px 20px rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ fontSize: '1rem', opacity: 0.8 }}>
        &copy; 2025 <strong>BreatheSafe</strong>. All rights reserved.
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <FacebookOutlined style={iconStyle} />
        <TwitterOutlined style={iconStyle} />
        <LinkedinOutlined style={iconStyle} />
      </div>
    </footer>
  );
};

const iconStyle = {
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#ffffff',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
};

export default Footer;
