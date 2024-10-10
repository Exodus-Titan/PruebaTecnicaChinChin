import  Currency from "../models/currency"
import { AppError } from "../middleware/errorMiddleware";
import { UpdateBySymbolDto } from "../dto/updateBySymbolDto";

export class UpdateCurrencyBySymbol{

async updateCurrencyBySymbol(dto: UpdateBySymbolDto){
    let message = 'Error updateing Currency';
    let errorNumber = 500;
    try{
        const [numberOfAffectedRows, affectedRows] = await Currency.update(
            {price_in_USD: dto.price_in_USD},
            {
                where: {symbol: dto.symbol}, 
                returning: true
            }
        );
        if (numberOfAffectedRows > 0)
            return affectedRows[0]
        else{
            message = 'Currency Not Found';
            errorNumber = 404;
            }
    }
    catch(error){
        throw new AppError(message, errorNumber)
    }
}
}