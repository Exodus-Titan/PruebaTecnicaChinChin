import Currency from "../../models/currency"

export async function findCurrencyById(id: number){
    return Currency.findByPk(id);
}