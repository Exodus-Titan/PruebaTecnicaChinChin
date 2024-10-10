import { findCurrencyById } from "../database/queries/findCurrencyById";
import { AppError } from "../middleware/errorMiddleware";

export class FindCurrencyById{
    async findById(id: number){
        try{
            return await findCurrencyById(id);
        }catch(error){
            throw new AppError('Currency Not Found', 404)
        }

    }
}