import { AUTHENTICATED_USER, LOGGED_OFF_USER } from '../actions/authentication';
import { User } from '../../core/models/user';


export const AuthenticationReducer = (state: User = null, action: any) => {
    switch (action.type) {
        case AUTHENTICATED_USER:
        return Object.assign({}, state, {
            user: action.payload
        });

        case LOGGED_OFF_USER:
        return Object.assign({}, state, {
            user: null
        });

        default:
          return state;
    }
};
