export class DailyTransactionCounts {
    date: Date;
    count: number;

    constructor(pDate: Date, pCount: number) {
        this.date = pDate;
        this.count =  pCount;
    }
}
