import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
