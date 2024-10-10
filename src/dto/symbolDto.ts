
import {IsString } from "class-validator";

export class symbolDto {
    @IsString()
    symbol!: string;
    
    constructor(symbol: string) {
        this.symbol = symbol;
    }
}