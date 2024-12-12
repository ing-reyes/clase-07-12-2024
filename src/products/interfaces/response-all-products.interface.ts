import { ProductEntity } from "../entities/product.entity";

export interface ResponseAllProducts{
    total: number, 
    data: ProductEntity[],
}