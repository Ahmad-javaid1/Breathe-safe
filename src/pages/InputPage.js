import React from 'react';
import { Form, Input, DatePicker, Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const InputPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = () => navigate('/output');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #111827, #1f2937)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(20px)',
          padding: '40px',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '600px',
          boxShadow: '0 0 30px rgba(0, 255, 180, 0.05)'
        }}
      >
        <Title style={{ color: '#fff', textAlign: 'center' }}>AQI Input</Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="city" label={<span style={{ color: '#ccc' }}>City</span>} rules={[{ required: true }]}>
            <Input placeholder="e.g., Dubai" style={inputStyle} />
          </Form.Item>

          <Form.Item name="datetime" label={<span style={{ color: '#ccc' }}>Date & Time</span>} rules={[{ required: true }]}>
            <DatePicker showTime style={{ width: '100%' }} defaultValue={moment()} />
          </Form.Item>

          {['CO', 'NO2', 'SO2', 'PM2.5', 'PM10', 'O3'].map((item) => (
            <Form.Item key={item} name={item.toLowerCase()} label={<span style={{ color: '#ccc' }}>{item}</span>} rules={[{ required: true }]}>
              <Input type="number" placeholder={`Enter ${item} level`} style={inputStyle} />
            </Form.Item>
          ))}

          <Form.Item>
            <Button htmlType="submit" type="primary" block style={buttonStyle}>
              Predict AQI
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

const inputStyle = {
  backgroundColor: '#1f2937',
  color: '#fff',
  borderColor: '#4ade80',
  borderRadius: '10px',
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #22d3ee, #14b8a6)',
  border: 'none',
  borderRadius: '30px',
  height: '45px',
  fontSize: '1rem',
};

export default InputPage;
