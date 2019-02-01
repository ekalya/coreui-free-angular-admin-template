import { TillNumber } from './till-number';

export class Branch {
    id: number;
    Name: string;
    PhysicalLocation: string;
    Telephone: string;
    TillNumbers: TillNumber[];
}
