import  Currency from "../models/currency"
import { AppError } from "../middleware/errorMiddleware";
import { UpdateByIdDto } from "../dto/updateByIdDto";

export class UpdateCurrencyById{
    async updateCurrencyById(dto: UpdateByIdDto){
    let message ='Error updateing Currency';
    let errorNumber = 500;
    try{
        const [numberOfAffectedRows, affectedRows] = await Currency.update(
            {price_in_USD: dto.price_in_USD},
            {
                where: {id: dto.id}, 
                returning: true
            }
        );
        if (numberOfAffectedRows > 0)
            return affectedRows[0]
        else
            message = 'Currency not found';
            errorNumber = 404;
            throw new AppError(message, errorNumber)
    }
    catch(error){
        throw new AppError(message, errorNumber)
    }
}
}