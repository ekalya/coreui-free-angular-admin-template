import { EventEmitter } from '@angular/core';

export class MenuItem {
    name: string;
    action: EventEmitter<any> = new EventEmitter<any>();
    constructor(name: string, ev: EventEmitter<any>) {
        this.name = name;
        this.action = ev;
    }
}
