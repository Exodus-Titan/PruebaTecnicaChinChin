export class priceConvertion{
    public symbol!: string;
    public amount!: number;
    public currencies!: ammonuntInCurrency[];

    constructor(symbol: string, amount: number, currencies: ammonuntInCurrency[]) {
        this.symbol = symbol;
        this.amount = amount;
        this.currencies = currencies;
    }
}

export class ammonuntInCurrency{
    public symbol!: string;
    public amount!: number;

    constructor(symbol: string, amount: number) {
        this.symbol = symbol;
        this.amount = amount;
    }
}