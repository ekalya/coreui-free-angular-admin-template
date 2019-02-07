import { AUTHENTICATED_USER, LOGGED_OFF_USER } from '../actions/authentication';
import { MenuItem } from '../../core/models/menu-item';
import { SET_MENU, PURGE_MENU } from '../actions/menu-items';


export const MenuItemsReducer = (state: MenuItem[] = [], action: any) => {
    switch (action.type) {
        case SET_MENU:
        return Object.assign({}, state, {
            authenticatedUser: action.user,
            loginTime: new Date()
        });

        case PURGE_MENU:
        return Object.assign({}, state, {
            authenticatedUser: null,
            lastUpdate: new Date()
        });

        default:
          return state;
    }
};
