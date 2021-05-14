export const STORE_FCM_TOKEN = "STORE_FCM_TOKEN";

export const storeToken = (token) => {
    return async dispatch => {
        dispatch({
            type: STORE_FCM_TOKEN,
            token: token
        })
    }
}
