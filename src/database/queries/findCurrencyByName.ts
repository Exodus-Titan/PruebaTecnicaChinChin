import Currency from "../../models/currency"

export async function findCurrencyByName(name: string){
    return Currency.findOne({where: { name: name}});
}