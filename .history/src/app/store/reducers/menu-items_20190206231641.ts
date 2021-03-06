import { AUTHENTICATED_USER, LOGGED_OFF_USER } from '../actions/authentication';
import { MenuItem } from '../../core/models/menu-item';
import { SET_MENU, PURGE_MENU } from '../actions/menu-items';


export const MenuItemsReducer = (state: MenuItem[] = [], action: any) => {
    console.log('menu item reducer..............' + action.type);
    switch (action.type) {
        case SET_MENU:
        console.log('set menu..................' + action.payload);
        return Object.assign({}, state, {
            menuItems: action.payload
        });

        case PURGE_MENU:
        return Object.assign({}, state, {
            menuItems: []
        });

        default:
          return state;
    }
};
