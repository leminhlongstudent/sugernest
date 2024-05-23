import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useAuth();
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginSuccess = await login(accountName, password);
            if (!loginSuccess) {
                setError('Đăng nhập thất bại. Vui lòng thử lại.');
            }else{
                navigate('/sugernest/');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Đăng nhập thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default LoginPage;
