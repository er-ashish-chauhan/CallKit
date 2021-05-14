import {
    STORE_FCM_TOKEN
} from "../actions/userActions";

const initialState = {
    fcmToken: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        
        case STORE_FCM_TOKEN:
            return {
                fcmToken: action.payload,
            }
    }
    return state;
}