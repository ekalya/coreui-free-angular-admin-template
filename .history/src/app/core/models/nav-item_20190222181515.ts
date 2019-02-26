import { Badge } from './badge';

export class NavItem {
    name: string;
    url: string;
    icon: string;
    badge: Badge;
    children: NavItem[];
    constructor() {
        this.badge = new Badge();
    }
}
