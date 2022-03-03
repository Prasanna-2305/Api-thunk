const initialState = {
    loading: null,
    users: [],
    error: ''
}
const async = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHUSERREQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCHUSERSUCCESS":
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case "FETCHUSERERROR":
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
        default: return state;
    }
}
export default async;