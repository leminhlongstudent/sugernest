import React, { createContext, useContext, useState,useEffect } from 'react';
import { loginToken } from '../services/ProductService.js';
import axios from 'axios';
// Tạo context
const AuthContext = createContext();

// Tạo provider
export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token') || null;
        }
        return null;
    });

    const [user, setUser] = useState(null); // Thêm state để lưu trữ thông tin người dùng

    useEffect(() => {
        const checkTokenValidity = async () => {
            if (token) {
                try {
                    // Gọi API để lấy thông tin người dùng
                    axios.get("http://localhost:8080/sugarnest/v0.1/account/myInfo", {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        setUser(response.data.result);
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
                axios.get("http://localhost:8080/sugarnest/v0.1/account/myInfo", {
                    headers: {
                        "Authorization": `Bearer ${newToken}`
                    }
                })
                .then(response => {
                   setUser(response.data.result);
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
