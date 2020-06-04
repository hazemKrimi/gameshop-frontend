export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_GAMES = 'GET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const DELETE_GAME = 'DELETE_GAME';

export const reducer = (state, { type, payload })=> {
    switch (type) {
        case SIGN_UP: return { ...state, user: payload };
        case LOG_IN: return { ...state, user: payload };
        case LOG_OUT: return { ...state, user: null };
        case UPDATE_USER: return { ...state, user: payload };
        case DELETE_USER: return { ...state, user: null };
        case GET_GAMES: return { ...state, games: payload };
        case ADD_GAME: return { ...state, games: [state.games && state.games, payload] };
        case DELETE_GAME: return { ...state, games: [state.games && state.games.filter(game => game._id !== payload._id)] };
        default: return state;
    }
}