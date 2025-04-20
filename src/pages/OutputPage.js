import React from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const OutputPage = () => {
  const navigate = useNavigate();
  const dummyAQI = 139;

  const getStatus = (aqi) => {
    if (aqi <= 50) return { label: 'Good', color: '#22c55e' };
    if (aqi <= 100) return { label: 'Moderate', color: '#facc15' };
    if (aqi <= 150) return { label: 'Sensitive', color: '#f97316' };
    return { label: 'Unhealthy', color: '#ef4444' };
  };

  const status = getStatus(dummyAQI);

  return (
    <div style={{
      background: 'linear-gradient(145deg, #0f172a, #1e293b)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '20px',
            color: '#fff',
            textAlign: 'center',
            width: '400px',
            boxShadow: `0 0 20px ${status.color}88`,
          }}
        >
          <Title level={2} style={{ color: '#fff' }}>AQI Result</Title>
          <Paragraph style={{ fontSize: '1.5rem', color: '#e5e7eb' }}>
            Your AQI is:
          </Paragraph>

          <Title level={1} style={{ color: status.color }}>{dummyAQI}</Title>
          <Paragraph style={{ color: '#e5e7eb' }}>
            Status: <strong style={{ color: status.color }}>{status.label}</strong>
          </Paragraph>
          <Button
            type="primary"
            onClick={() => navigate('/input')}
            style={{
              background: status.color,
              border: 'none',
              borderRadius: '30px',
              marginTop: '20px',
              fontWeight: 'bold'
            }}
          >
            Try Another
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default OutputPage;
