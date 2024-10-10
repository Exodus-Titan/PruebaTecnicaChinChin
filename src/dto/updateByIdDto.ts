
import { IsNumber } from "class-validator";

export class UpdateByIdDto {
    @IsNumber()
    id!: number;

    @IsNumber()
    price_in_USD!: number;

    constructor(id: number, price_in_USD: number) {
        this.id = id;
        this.price_in_USD= price_in_USD;
    }
}