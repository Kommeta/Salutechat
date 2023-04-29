import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useMemo, useState, useContext } from "react";
import { auth, login, logout } from "./utils/firebase";
import { conversations } from './components/Conversations/ConversationsList';

const AuthContext  = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async (email, password) => {
        setIsLoading(true)
        try {
            await login(email, password)
        } catch (error) {
            console.log(error);
            setError('Не верно введены данные!')
        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler  = async () => {
        setIsLoading(true)
        try {
            await logout()
        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() =>
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    ...user,
                    avatar: conversations.find(c => c.userId === user.uid).image,
                })
            } else {
                setUser(null)
            }
            setIsLoadingInitial(false)
        }),
        []
    )

    const values = useMemo(
        () => ({
            user,
            isLoading,
            login: loginHandler,
            logout: logoutHandler,
            error
    }), [user, isLoading, error]) 

    return <AuthContext.Provider value={values}>
        {!isLoadingInitial && children}</AuthContext.Provider>
}

export const useAuth = () => { 
    return useContext(AuthContext)
}