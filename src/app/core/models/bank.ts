import { BankBranch } from './bank-branch';

export class Bank {
    id: number;
    code: string;
    name: string;
    postalAddress: string;
    physicalAddress: string;
    telephone: string;
    email: string;
    branches: BankBranch[];
    constructor() {
        this.branches = [];
    }
}
