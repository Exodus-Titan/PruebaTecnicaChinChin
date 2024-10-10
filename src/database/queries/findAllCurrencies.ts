import Currency from "../../models/currency"

export async function allCurrencies(){
    return await Currency.findAll();
}