import { PaginationDto } from "../common/dtos/pagination/pagination.dto";
import { CreateProductDto } from "./dtos/create-product.dto"
import { ProductsService } from './products.service';

export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) { }

    create = () => {
        const product = {
            name: "calzado1",
            price: 10,
            stock: 3,
        };

        const [error, createProductDto] = CreateProductDto.create(product);
        if (error) throw error;

        this.productsService.create(createProductDto!)
            .then((product) => console.log(product))
            .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }));

    }

    findAll = () => {
        const [error, paginationDto] = PaginationDto.create({ page: 1, limit: 10 });
        if (error) throw error;

        this.productsService.findAll(paginationDto!)
            .then((products) => console.log(products))
            .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }));
    }

    findOne = () => {
        const id = "2";
        this.productsService.findOne(id)
            .then((products) => console.log(products))
            .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }));
    }

    update = () => {
        const id = "2";
        const product = {
            name: "new name"
        };
        this.productsService.update(id, product)
            .then((product) => console.log(product))
            .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }));
    }

    remove = () => {
        const id = "2";
        this.productsService.remove(id)
            .then((product) => console.log(product))
            .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }));
    }
}