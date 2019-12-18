import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return{
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, localId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken : idToken,
        localId : localId
    }
}

export const authFail = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const auth  = (email, password, isSignup) => {
    
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMQf7r1hmO24rlvpgq3MeAqg8bdXrYkKM"
        if (isSignup) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMQf7r1hmO24rlvpgq3MeAqg8bdXrYkKM";
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err.response.data.error))
            })
        
    }
}


export const switchAuth = () => {
    return {
        type : actionTypes.SWITCH_AUTH
    }
}

