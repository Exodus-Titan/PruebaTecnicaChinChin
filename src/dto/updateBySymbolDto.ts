
import { IsNumber, IsString } from "class-validator";

export class UpdateBySymbolDto {
    @IsString()
    symbol!: string;

    @IsNumber()
    price_in_USD!: number;

    constructor(symbol: string, price_in_USD: number) {
        this.symbol = symbol;
        this.price_in_USD = price_in_USD;
    }
}