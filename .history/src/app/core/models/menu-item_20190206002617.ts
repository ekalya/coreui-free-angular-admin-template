
export class MenuItem {
    name: string;
    action: EventEmitter<any> = new EventEmitter<any>();
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
