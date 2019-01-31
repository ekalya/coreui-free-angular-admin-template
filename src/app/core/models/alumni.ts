import { Occupation } from './occupation';
import { Classof } from './classof';
import { Institute } from './institute';
import { User } from './user';

export class Alumni {
    id: number;
    userDetailsImpl: User;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    EmailType: number;
    Email: string;
    HomePhone: string;
    occupation: Occupation;
    addressType: number;
    alpha3Code: string;
    address: string;
    city: string;
    state: string;
    county: string;
    ZIP: string;
    maidenName: string;
    classOf: Classof;
    reviousInstitue: Institute;
    afterInstitue: Institute;
}
