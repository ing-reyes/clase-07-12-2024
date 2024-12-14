import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { HttpStatus } from '../common/enums/http-status.enum';
import { ManagerError } from '../common/errors/manager.error';
import { ResponseAllApi, ResponseOneApi } from '../common/interfaces/response-api.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

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

    async findAll( paginationDto: PaginationDto ): Promise<ResponseAllApi<CategoryEntity>>{
        const { limit = 10, page = 1 } = paginationDto;
        const skip = ( page - 1 ) * limit;
        
        const total = this.categories.length;
        const lastPage = Math.ceil( total / limit );
        try {
            return {
                status: {
                    statusMsg: "OK",
                    statusCode: HttpStatus.OK,
                    error: null,
                },
                meta: {
                    total,
                    page,
                    limit,
                    lastPage,

                },
                data: this.categories.slice(skip, limit),
            };
        } catch (error) {
            throw error;
        }
    }

    async findOne(id:string): Promise<ResponseOneApi<CategoryEntity>>{
        try {
            const category = this.categories.find((category)=>category.id===id);
            if(!category ) throw ManagerError.notFound("Category not found");
            
            return {
                status: {
                    statusMsg: "OK",
                    statusCode: HttpStatus.OK,
                    error: null,
                },
                data: category,
            };
        } catch (error) {
            throw error;
        }
    }

    async update( id:string, updateCategory: UpdateCategoryDto ): Promise<ResponseOneApi<CategoryEntity>>{
        try {
            const category = await this.findOne(id);
            
            const categoryIndex = this.categories.findIndex((category)=>category.id===id);
            if( categoryIndex == -1 ) ManagerError.notFound("Category not found!");
            
            /* 
                * Esta actualización la estoy haciendo con ternarios
                * Si viene la propiedad updateCategory.name la establezco, sino dejo la de category.name
                * Los ternarios son condicionales en linea
                * PD: En la aplicación final no se hara asi, ya que la base de datos omite las propiedades undefined
                * 
                * * Más info sobre ternarios: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator
            */
            this.categories[categoryIndex] = {
                ...category.data,
                name: (updateCategory.name)? updateCategory.name: category.data.name,
                description: (updateCategory.description)? updateCategory.description: category.data.description,
                updatedAt: new Date(),
            }

            return {
                status: {
                    statusMsg: "OK",
                    statusCode: HttpStatus.OK,
                    error: null,
                },
                data: this.categories[categoryIndex],
            };
        } catch (error) {
            throw error;
        }
    }

    async remove( id:string ): Promise<ResponseOneApi<CategoryEntity>>{
        try {
            const category = await this.findOne(id);
            this.categories = this.categories.filter((category)=>category.id!==id)
            
            return {
                status: {
                    statusMsg: "OK",
                    statusCode: HttpStatus.OK,
                    error: null,
                },
                data: category.data
            }
        } catch (error) {
            throw error;
        }
    }

}