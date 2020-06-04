import React, { createContext, useReducer } from 'react';
import { reducer, LOG_IN, LOG_OUT, SIGN_UP, GET_GAMES, ADD_GAME, DELETE_GAME, UPDATE_USER, DELETE_USER } from './reducers/mainReducer';
import jwtDecode from 'jwt-decode';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [ { user, users, games }, dispatch ] = useReducer(reducer, { 
        user: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null,
        users: null,
        games: null
    });

    const signUp = async(name, email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            document.cookie = 'SessionID=' + res.SessionID;
            localStorage.setItem('token', res.encoded_jwt);
            dispatch({ type: SIGN_UP, payload: jwtDecode(res.encoded_jwt) });
            window.location.replace('/home');
        } catch (err) {
            throw err;
        }
    };

    const logIn = async(email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            document.cookie = 'SessionID=' + res.SessionID;
            localStorage.setItem('token', res.encoded_jwt);
            dispatch({ type: LOG_IN, payload: jwtDecode(res.encoded_jwt) });
            window.location.replace('/home');
        } catch(err) {
            throw err;
        }
    };

    const logOut = async() => {
        try {
            await fetch(`${process.env.REACT_APP_SERVER}/logout`);
            document.cookie = "SessionID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem('token');
            dispatch({ type: LOG_OUT });
            window.location.replace('/login');
        } catch (err) {
            console.error(err);
        }
    };

    const getGames = async() => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/games`);
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            dispatch({ type: GET_GAMES, payload: res });
        } catch (err) {
            throw err;
        }
    };

    const addGame = async(title, description, file) => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('file', file);
            let res = await fetch(`${process.env.REACT_APP_SERVER}/games`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            dispatch({ type: ADD_GAME, payload: res });
            window.location.replace('/home');
        } catch (err) {
            throw err;
        }
    };

    const deleteGame = async(id) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/games`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id })
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            dispatch({ type: DELETE_GAME, payload: res });
            window.location.replace('/home');
        } catch (err) {
            throw err;
        }
    };

    const updateUser = async(name, email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ name, email, password })
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            document.cookie = 'SessionID=' + res.SessionID;
            localStorage.setItem('token', res.encoded_jwt);
            dispatch({ type: UPDATE_USER, payload: jwtDecode(res.encoded_jwt) });
            window.location.replace('/home');
        } catch (err) {
            throw err;
        }
    };

    const deleteUser = async() => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            res = await res.json();
            if ([401, 404, 400].includes(res.status)) throw res;
            document.cookie = "SessionID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem('token');
            dispatch({ type: DELETE_USER });
            window.location.replace('/signup');
        } catch (err) {
            throw err;
        }
    };

    return (
        <MainContext.Provider value={{ user, users, games, signUp, logIn, logOut, getGames, addGame, deleteGame, updateUser, deleteUser }}>
            { children }
        </MainContext.Provider>
    )
};

export default MainContextProvider;