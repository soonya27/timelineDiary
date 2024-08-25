import React, { createContext, useContext, useEffect, useState } from 'react';
import { authUpdate, login, logout } from '../api/firebase';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        authUpdate(setUser);
    })

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}

