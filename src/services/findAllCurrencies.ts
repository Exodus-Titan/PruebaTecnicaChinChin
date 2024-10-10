import { allCurrencies } from "../database/queries/findAllCurrencies";
import { AppError } from "../middleware/errorMiddleware";

export class FindAllCurrencies{
    async getAllCurrencies(){
        try{
            return await allCurrencies();
        }catch(error){
            throw new AppError('Currency Not Found', 404)
        }
    }
}