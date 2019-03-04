export class OrganizationUnitType {
    id: number;
    label: string;
    parent: OrganizationUnitType;
    children: Array<OrganizationUnitType>;
    constructor() {
        this.children = new Array<OrganizationUnitType>();
    }
}
