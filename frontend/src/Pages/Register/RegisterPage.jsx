import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService'; 
import './RegisterPage.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    
    // State for loading and error txt
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(''); // To show success or error txt

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous txt
        setLoading(true); // Show loading

        const userData = {
            email,
            phoneNumber,
            password
        };

        try {
            // Call the register function from our service
            const response = await authService.register(userData);
            
            // On success, show a success message and redirect
            setMessage(response.data.msg); // "User registered successfully!"
            setLoading(false);

            // Redirect to login page after a short delay so the user can see the message
            setTimeout(() => {
                navigate('/login');
            }, 2000); // 2 seconds delay my ref

        } catch (error) {
            // If the API returns an error (e.g., user already exists)
            const resMessage = 
                (error.response && error.response.data && error.response.data.msg) ||
                error.message ||
                error.toString();

            setMessage(resMessage);
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-wrapper">
                <div className="auth-header">
                    <Link to="/login" className="auth-link">Back</Link>
                    <Link to="/" className="auth-link">Home</Link>
                </div>
                <form className="auth-form" onSubmit={handleRegister}>
                    <h2>Register</h2>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required disabled={loading} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading} />
                    </div>
                    
                    {/* Display feedback messages */}
                    {message && (
                        <div className="form-message">
                            {message}
                        </div>
                    )}

                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>

                    <p className="auth-redirect">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;








