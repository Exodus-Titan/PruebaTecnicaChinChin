
import { IsNumber, IsString } from "class-validator";

export class CreateCurrencyDto {
    @IsString()
    name!: string;

    @IsString()
    symbol!: string;

    @IsNumber()
    price_in_USD!: number;
    
    constructor(name: string, symbol: string, price_in_USD: number) {
        this.name = name;
        this.symbol = symbol;
        this.price_in_USD = price_in_USD;
    }
}