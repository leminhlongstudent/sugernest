import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginToken } from '../services/AuthService.js';
import axios from 'axios';
import { REST_API_BASE_URL } from '../services/ProductService.js';
// Tạo context
const AuthContext = createContext();

// Tạo provider
export function AuthProvider({ children }) {

    const [token, setToken] = useState(null); // Ban đầu đặt token là null

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tokenFromStorage = localStorage.getItem('token');
            if (tokenFromStorage) {
                setToken(tokenFromStorage);
            }
        }
    }, []); 
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('token', token);
        }
    }, []);

    const [user, setUser] = useState(null); // Thêm state để lưu trữ thông tin người dùng

    useEffect(() => {
        const checkTokenValidity = async () => {
            if (token) {
                try {
                    // Gọi API để lấy thông tin người dùng
                    axios.get(`${REST_API_BASE_URL}/account/myInfo`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                        .then(response => {
                            setUser(response.data.result);
                            localStorage.setItem('user', JSON.stringify(response.data.result));
                        })
                        .catch(error => {
                            console.error("There was an error with the Axios operation:", error);
                        });
                } catch (error) {
                    console.error('Error checking token validity:', error);
                }
            }
        };
        checkTokenValidity();
    }, [token]);

    const login = async (accountName, password) => {
        try {
            const response = await loginToken(accountName, password);
            if (response.status === 200) {
                const newToken = response.data.result.token;
                localStorage.setItem('token', newToken);
                setToken(newToken);

                // Gọi API để lấy thông tin người dùng
                axios.get(`${REST_API_BASE_URL}/account/myInfo`, {
                    headers: {
                        "Authorization": `Bearer ${newToken}`
                    }
                })
                    .then(response => {
                        setUser(response.data.result);
                        localStorage.setItem('user', JSON.stringify(response.data.result));
                    })
                    .catch(error => {
                        console.error("There was an error with the Axios operation:", error);
                    });
                return true; // Trả về true nếu đăng nhập thành công
            } else {
                console.error('Login failed: Unexpected response:', response);
                return false; // Trả về false nếu có lỗi phản hồi từ server
            }
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
            return false; // Trả về false nếu có lỗi trong quá trình gọi API
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook để sử dụng AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
