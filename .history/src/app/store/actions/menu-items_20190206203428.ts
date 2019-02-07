
import { Injectable } from '@angular/core';
import { User } from '../../core/models/user';
import { MenuItem } from '../../core/models/menu-item';


export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const SET_MENU = 'SET_MENU';
export const PURGE_MENU = 'PURGE_MENU';

@Injectable()
export class MenuItems {
    constructor() { }
    setMenu(menuItems: MenuItem[]) {
        return { type: SET_MENU, paylod: menuItems};
    }
    purgeMenu() {
        return { type: PURGE_MENU, paylod: null};
    }
}