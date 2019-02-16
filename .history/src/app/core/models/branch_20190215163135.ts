import { TillNumber } from '../models';

export class Branch {
    id: number;
    name: string;
    physicalLocation: string;
    telephone: string;
    tillNumbers: TillNumber[];

    constructor() {
    this.tillNumbers = [];
    }
}
