import { findCurrencyBySymbol } from "../database/queries/findCurrencyBySymbol";
import { AppError } from "../middleware/errorMiddleware";

export class FindCurrencyBySymbol{
    async findBySymbol(symbol: string){
        try{
            return await findCurrencyBySymbol(symbol);
        }catch(error){
            throw new AppError('Currency Not Found', 404)
        }
    }
}