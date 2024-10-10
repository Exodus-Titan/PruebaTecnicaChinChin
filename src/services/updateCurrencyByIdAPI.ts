import  Currency from "../models/currency"
import { AppError } from "../middleware/errorMiddleware";
import { getCurrencyPriceBinance, getVESPrice } from "./obtainCurrencyPrice";

export class UpdateCurrencyByIdAPI{
    async updateCurrencyByIdAPI(id: number){
        let message = 'Error updateing Currency';
        let errorNumber = 500;
        try{
            let newPrice = 0;
            const currency = await Currency.findByPk(id);
            if (currency?.symbol === "VES")
                newPrice = (1 / await getVESPrice());
            else
                newPrice = await getCurrencyPriceBinance(currency?.symbol as string);
            const [numberOfAffectedRows, affectedRows] = await Currency.update(
                {price_in_USD: newPrice},
                {
                    where: {id: Number(id)}, 
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