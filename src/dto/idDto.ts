
import {IsNumber } from "class-validator";

export class idDto {
    @IsNumber()
    id!: number;
    
    constructor(id: number) {
        this.id = id;
    }
}