// pages/LoginPages.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPages() {
  const navigate = useNavigate();

  // Fungsi untuk menangani login sukses
  const handleLoginSuccess = () => {
    navigate('/'); // Arahkan ke halaman Home setelah login berhasil
  };

  return (
    <div>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPages;
