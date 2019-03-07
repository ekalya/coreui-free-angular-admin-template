export class OrganizationUnitType {
    id: number;
    name: string;
    parent: OrganizationUnitType;
    children: Array<OrganizationUnitType>;
    constructor() {
        this.children = new Array<OrganizationUnitType>();
    }
}
