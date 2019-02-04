export class DailyTransactionCounts {
    date: Date;
    count: number;
    total: number;
    constructor(pDate: Date, pCount: number, pTotal: number) {
        this.date = pDate;
        this.count =  pCount;
        this.total = pTotal;
    }
}
