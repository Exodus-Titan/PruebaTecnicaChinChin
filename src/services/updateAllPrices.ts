import { UpdateByIdDto } from "../dto/updateByIdDto";
import { AppError } from "../middleware/errorMiddleware";
import { FindAllCurrencies } from "./findAllCurrencies";
import { getCurrencyPriceBinance, getVESPrice } from "./obtainCurrencyPrice";
import { UpdateCurrencyById } from "./updateCurrencyById";

const findAll = new FindAllCurrencies();
const updateCurrency = new UpdateCurrencyById();

export async function updateAllPrices(){
    try
    {
        const currencies = await findAll.getAllCurrencies();
        for (const currency of currencies){
            let newPrice = 0;
            if (currency.symbol === 'USDT') {
                continue;
            }
            if ((currency.symbol === 'VES')){
                newPrice = (1 / await getVESPrice());
            }
            else{
                newPrice = await getCurrencyPriceBinance(currency.symbol);
            }
            const updateDto = new UpdateByIdDto(currency.id, newPrice)
            await updateCurrency.updateCurrencyById(updateDto);
        }
    }catch(error){
        throw new AppError('Couldnt update all currencies', 500);
    }
}