import { THEMES_OF_USER, IS_LOADING, TOKEN_404, NOTIFICATIONS } from '../actions/types'

const INITIAL_STATE = {
    UserThemes: [],
    loadingUser: false,
    Token_404: false,
    Notif: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case THEMES_OF_USER:
            return { ...state, UserThemes: action.payload }
        case IS_LOADING:
            return { ...state, loadingUser: action.payload }
        case TOKEN_404:
            return { ...state, Token_404: true }
        case NOTIFICATIONS:
            return { ...state, Notif: action.payload }
        default: return state
    }
}