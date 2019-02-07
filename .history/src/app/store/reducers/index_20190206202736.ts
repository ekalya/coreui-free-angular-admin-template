import { combineReducers } from 'redux';
import { AuthenticationReducer } from './authentication';
import { MenuItemsReducer } from './menu-items';

export const rootReducer = combineReducers({
    user: AuthenticationReducer,
    menuItems: MenuItemsReducer
  })