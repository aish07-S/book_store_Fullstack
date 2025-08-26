import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        console.log('Logging in with:', { email, password });
        navigate('/'); 
    };

    return (
        <div className="auth-container">
            <div className="auth-form-wrapper">
                <div className="auth-header">
                    <Link to="/" className="auth-link">Back</Link>
                    <Link to="/" className="auth-link">Home</Link>
                </div>
                <form className="auth-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    
                    <div className="form-group">
                        <label htmlFor="email">Username or email address</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className="form-options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className="auth-button">Login</button>

                    <p className="auth-redirect">
                        Do not have an account? <Link to="/register">Register now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;