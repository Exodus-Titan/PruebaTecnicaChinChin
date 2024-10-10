import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

/**
 * Función genérica para validar cualquier DTO.
 * @param dtoClass La clase del DTO que deseas validar.
 * @param body Los datos (por ejemplo, req.body) que deseas validar.
 * @returns Un array de errores de validación, o null si la validación es exitosa.
 */
export async function validateDto<T extends object>(dtoClass: new (...args: any[]) => T, body: any): Promise<string[] | null> {
    // Transformar los datos en una instancia del DTO
    const dtoInstance = plainToInstance(dtoClass, body);

    // Ejecutar la validación
    const errors = await validate(dtoInstance);

    // Si hay errores, los mapeamos en un array con mensajes; si no, devolvemos null
    if (errors.length > 0) {
        return errors.map(err => Object.values(err.constraints || {}).join(', '));
    }
    
    return null;
}
