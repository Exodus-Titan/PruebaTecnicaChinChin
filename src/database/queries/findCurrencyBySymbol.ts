import Currency from "../../models/currency"

export async function findCurrencyBySymbol(symbol: string){
    return Currency.findOne({where: { symbol: symbol}});
}