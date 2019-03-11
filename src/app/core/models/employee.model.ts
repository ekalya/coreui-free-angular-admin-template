import { GenericModel } from './generic-model.model';
import { OrganizationUnit } from './organization-unit.model';
import { Nationality } from './nationality.model';
import { User } from './user';
import { EmploymentStatus } from './employment-status.model';
import { WorkShift } from './work-shift.model';
import { PayGrade } from './pay-grade';
import { Location } from './location.model';

export class Employee extends GenericModel {
    empCode: string;
    firstName: string;
    lastName: string;
    otherName: string;
    position: Position;
    organizationUnit: OrganizationUnit;
    nationality: Nationality;
    login: User;
    employmentStatus: EmploymentStatus;
    workShift: WorkShift;
    payGrade: PayGrade;
    location: Location;
}
