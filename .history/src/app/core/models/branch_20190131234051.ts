import { TillNumber } from '../models';

export class Branch {
    id: number;
    Name: string;
    PhysicalLocation: string;
    Telephone: string;
    TillNumbers: TillNumber[];
}
