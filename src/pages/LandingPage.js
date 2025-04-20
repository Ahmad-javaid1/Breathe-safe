import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

const { Title, Paragraph } = Typography;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: '#0f172a',
          },
          fpsLimit: 60,
          particles: {
            color: { value: '#14b8a6' },
            links: {
              color: '#14b8a6',
              distance: 130,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'bounce',
              random: false,
              speed: 0.7,
              straight: false,
            },
            number: {
              value: 50,
              density: { enable: true, area: 900 },
            },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5%',
          flexWrap: 'wrap',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '600px' }}
        >
          <Title
            style={{
              color: '#fff',
              fontSize: '4rem',
              background: 'linear-gradient(to right, #22d3ee, #14b8a6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            BreatheSafe
          </Title>
          <Paragraph style={{ color: '#d1d5db', fontSize: '1.2rem', lineHeight: 1.8 }}>
            Step into a future where air quality meets tech. <br /> Monitor, predict, and breathe safer — with style.
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate('/input')}
              style={{
                background: 'linear-gradient(90deg, #22d3ee, #14b8a6)',
                border: 'none',
                borderRadius: '30px',
                padding: '0 2.5rem',
                height: '48px',
                fontSize: '1rem',
                marginTop: '30px',
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.4)',
              }}
            >
              Check AQI
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #14b8a6 0%, #0f172a 80%)',
            boxShadow: '0 0 60px rgba(20, 184, 166, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: '5rem',
              color: '#fff',
              fontWeight: 200,
              letterSpacing: 2,
            }}
          >
            AQI
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
