
import { convertionDto } from "../dto/convertionDto";
import { FindCurrencyBySymbol } from "./findCurrencyBySymbol";
import { FindAllCurrencies } from "./findAllCurrencies";
import { AppError } from "../middleware/errorMiddleware";
import { ammonuntInCurrency, priceConvertion } from "../models/priceConvertion";


const findBySimbol = new FindCurrencyBySymbol();
const findAll = new FindAllCurrencies();

export class CurrencyConvertion{

    async convertCurrency(dto: convertionDto){
        let message = 'Convertion Error';
        let errorNumber = 500;
        try{
            let currencyFrom;
            const currencies = await findAll.getAllCurrencies();
            if (dto.symbol === "USD")
                currencyFrom = await findBySimbol.findBySymbol('USDT');
            else
                currencyFrom = await findBySimbol.findBySymbol(dto.symbol);
            if (!currencyFrom) {
                message = 'Currency Not Found';
                errorNumber = 404;
                throw new AppError(message, errorNumber);
            }
            const amountInDollars = dto.amount * currencyFrom.price_in_USD;
            let convertions: ammonuntInCurrency[] = [];
            for (let currency of currencies){
                if (currency.symbol === dto.symbol){
                    continue;
                }else{
                    const convertion = new ammonuntInCurrency(currency.symbol, amountInDollars / currency.price_in_USD);
                    convertions.push(convertion);
                }
            }
            const priceResult = new priceConvertion(dto.symbol, dto.amount, convertions);
            return priceResult
            
        }
        catch(error){
            throw new AppError(message, errorNumber);
        }
    }
}