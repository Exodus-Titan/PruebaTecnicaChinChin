
import { IsNumber, IsString } from "class-validator";

export class convertionDto {
    @IsString()
    symbol!: string;

    @IsNumber()
    amount!: number;
    
    constructor(symbol: string, amount: number) {
        this.symbol = symbol;
        this.amount = amount;
    }
}