import { ManagerError } from '../common/errors/manager.error';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { ResponseAllCategories } from './interfaces/response-all-categories.interface';

export class CategoriesService {
    private categories: CategoryEntity[] = [
        { id: "1", name: "category1", description: "description1", createdAt: new Date(), updatedAt: new Date()},
        { id: "2", name: "category2", description: "description2", createdAt: new Date(), updatedAt: new Date()},
        { id: "3", name: "category3", description: "description3", createdAt: new Date(), updatedAt: new Date()},
        { id: "4", name: "category4", description: "description4", createdAt: new Date(), updatedAt: new Date()},
        { id: "5", name: "category5", description: "description5", createdAt: new Date(), updatedAt: new Date()},
    ];

    async create( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity>{
        try {
            const category: CategoryEntity = { ...createCategoryDto, id: Date.now().toString(), createdAt: new Date(), updatedAt: new Date()  };
            this.categories.push(category);
            return category;
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<ResponseAllCategories>{
        try {
            return {
                total: this.categories.length,
                data: this.categories,
            };
        } catch (error) {
            throw error;
        }
    }

    async findOne(id:string): Promise<CategoryEntity>{
        try {
            const category = this.categories.find((category)=>category.id===id);
            if(!category ) throw ManagerError.notFound("Category not found");
            
            return category;
        } catch (error) {
            throw error;
        }
    }

    async update( id:string, updateCategory: UpdateCategoryDto ): Promise<CategoryEntity>{
        try {
            const category = await this.findOne(id);
            
            const categoryIndex = this.categories.findIndex((category)=>category.id===id);
            
            /* 
                * Esta actualización la estoy haciendo con ternarios
                * Si viene la propiedad updateCategory.name la establezco, sino dejo la de category.name
                * Los ternarios son condicionales en linea
                * PD: En la aplicación final no se hara asi, ya que la base de datos omite las propiedades undefined
                * 
                * * Más info sobre ternarios: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator
            */
            this.categories[categoryIndex] = {
                ...category,
                name: (updateCategory.name)? updateCategory.name: category.name,
                description: (updateCategory.description)? updateCategory.description: category.description,
                updatedAt: new Date(),
            }

            return this.categories[categoryIndex];
        } catch (error) {
            throw error;
        }
    }

    async remove( id:string ): Promise<CategoryEntity>{
        try {
            const category = await this.findOne(id);
            this.categories = this.categories.filter((category)=>category.id!==id)
            return category
        } catch (error) {
            throw error;
        }
    }

}