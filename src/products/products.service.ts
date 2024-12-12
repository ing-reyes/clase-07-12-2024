import { ManagerError } from '../common/errors/manager.error';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ResponseAllProducts } from './interfaces/response-all-products.interface';
export class ProductsService {
    private products: ProductEntity[] = [
        { id: "1", name: "product1", price: 20, stock: 5, createdAt: new Date(), updatedAt: new Date()},
        { id: "2", name: "product1", price: 20, stock: 5, createdAt: new Date(), updatedAt: new Date()},
        { id: "3", name: "product2", price: 20, stock: 5, createdAt: new Date(), updatedAt: new Date()},
        { id: "4", name: "product3", price: 20, stock: 5, createdAt: new Date(), updatedAt: new Date()},
        { id: "5", name: "product4", price: 20, stock: 5, createdAt: new Date(), updatedAt: new Date()},
    ]

    async create( createProductDto: CreateProductDto ): Promise<ProductEntity>{
        try {
            const product: ProductEntity = { ...createProductDto, id: Date.now().toString(), createdAt: new Date(), updatedAt: new Date()  }
            this.products.push(product);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<ResponseAllProducts>{
        try {
            return {
                total: this.products.length,
                data: this.products,
            };
        } catch (error) {
            throw error;
        }
    }

    async findOne(id:string): Promise<ProductEntity>{
        try {
            const product = this.products.find((product)=>product.id===id);
            if(!product ) throw ManagerError.notFound("Product not found");
            
            return product;
        } catch (error) {
            throw error;
        }
    }

    async update( id:string, updateProductDto: UpdateProductDto ): Promise<ProductEntity>{
        try {
            const product = await this.findOne(id);
            
            const productIndex = this.products.findIndex((product)=>product.id===id);

            /* 
                * Esta actualización la estoy haciendo con ternarios
                * Si viene la propiedad updateProductDto.name la establezco, sino dejo la de product.name
                * Los ternarios son condicionales en linea
                * PD: En la aplicación final no se hara asi, ya que la base de datos omite las propiedades undefined
                * 
                * * Más info sobre ternarios: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator
            */
            this.products[productIndex] = {
                ...product,
                name: (updateProductDto.name)? updateProductDto.name: product.name,
                price: (updateProductDto.price)? updateProductDto.price: product.price,
                stock: (updateProductDto.stock)? updateProductDto.stock: product.stock,
                photo: (updateProductDto.photo)? updateProductDto.photo: product.photo,
                updatedAt: new Date(),
            }

            return this.products[productIndex];
        } catch (error) {
            throw error;
        }
    }

    async remove( id:string ): Promise<ProductEntity>{
        try {
            const product = await this.findOne(id);
            
            this.products = this.products.filter((product)=>product.id!==id)
            return product
        } catch (error) {
            throw error;
        }
    }

}