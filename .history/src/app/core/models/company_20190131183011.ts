import { Country } from './country';

export class Company {
    id: number;
    name: string;
    vat: string;
    address: string;
    city: string;
    country: Country;
}
