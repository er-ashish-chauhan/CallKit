export const STORE_FCM_TOKEN = "STORE_FCM_TOKEN";

export const storeToken = (token) => {
    return async (dispatch) => {
       try{ 
            dispatch({
            type: STORE_FCM_TOKEN,
            payload: token
        })
       }catch(err){
           console.log(err)
       }
    }
}
