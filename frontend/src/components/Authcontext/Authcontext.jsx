import React, { createContext, useState, useEffect } from 'react';

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const url="https://jeerayz-backend.onrender.com"

    useEffect(() => {
        // Retrieve token from localStorage or wherever it's stored
        const savedToken = localStorage.getItem('token');
        setToken(savedToken);
    }, []);

    return (
        <Authcontext.Provider value={{ token,setToken,url }}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
