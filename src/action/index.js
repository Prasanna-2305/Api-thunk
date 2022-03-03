import axios from "axios";
export const FETCHUSERREQUEST = 'FETCHUSERREQUEST';
export const FETCHUSERSUCCESS = 'FETCHUSERSUCCESS';
export const FETCHUSERERROR = 'FETCHUSERERROR';

export const plusNumber = () => {
    return {
        type: "INCREMENT",
    }
}
export const minusNumber = () => {
    return {
        type: "DECREMENT",
    }
}

export const fetchUserRequest = () => {
    return {
        type: "FETCHUSERREQUEST",
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: "FETCHUSERSUCCESS",
        payload: users,
    }
}

export const fetchUserError = (error) => {
    return {
        type: "FETCHUSERERROR",
        payload: error,
    }
}

export const userFetch = () => {
    return async dispatch => {
        try {
            dispatch(fetchUserRequest);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUserSuccess(response.data));
            console.log(response.data);
        }
        catch(error){
            dispatch(fetchUserError(error.message));
        }
    }
}

