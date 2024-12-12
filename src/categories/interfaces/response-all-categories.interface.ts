import { CategoryEntity } from "../entities/category.entity";

export interface ResponseAllCategories{
    total: number, 
    data: CategoryEntity[],
}