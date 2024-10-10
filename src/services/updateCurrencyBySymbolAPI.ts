import  Currency from "../models/currency"
import { AppError } from "../middleware/errorMiddleware";
import { UpdateBySymbolDto } from "../dto/updateBySymbolDto";
import { getCurrencyPriceBinance, getVESPrice } from "./obtainCurrencyPrice";

export class UpdateCurrencyBySymbolAPI{

async updateCurrencyBySymbolAPI(symbol: string){
    let message = 'Error updateing Currency';
    let errorNumber = 500;
    try{
        let newPrice = 0;
        if (symbol === "VES")
            newPrice = (1 / await getVESPrice());
        else if (symbol === "USDT"){
            newPrice = 1;
        }else
            newPrice = await getCurrencyPriceBinance(symbol as string);
        console.log(newPrice)
        const [numberOfAffectedRows, affectedRows] = await Currency.update(
            {price_in_USD: newPrice},
            {
                where: {symbol: symbol}, 
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