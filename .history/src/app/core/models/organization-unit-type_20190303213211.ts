export class OrganizationUnitType {
    id: number;
    name: string;
    parent: OrganizationUnitType;
    children: ArrayList<OrganizationUnitType>;
}
