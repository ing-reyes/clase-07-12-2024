import { ManagerError } from "../common/errors/manager.error"
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';


export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService = new CategoriesService(),
    ) { }

    create = () => {
        const category = {
            name: "calzado",
            description: "nike",
        }

        const [ error,  createCategoryDto] = CreateCategoryDto.create( category )
        if( error ) throw ManagerError.badRequest(error);

        this.categoriesService.create( createCategoryDto! )
          .then((category)=>console.log(category))
          .catch((error)=>console.error({statusCode: error.statusCode, message: error.message}))
    }

    findAll = () => {
      this.categoriesService.findAll()
        .then((categories)=>console.log(categories))
        .catch((error)=>console.error({statusCode: error.statusCode, message: error.message}))
    }

    findOne = (id:string) => {

      this.categoriesService.findOne(id)
        .then((category)=>console.log(category))
        .catch((error)=>console.error( {statusCode: error.statusCode, message: error.message} ))
    }

    update = () => {
      const id = "2";
      const data = {
        name: "hola",
      };

      const [ error, updateCategoryDto ] = UpdateCategoryDto.update( data );
      if( error ) throw ManagerError.badRequest(error);

      this.categoriesService.update( id, updateCategoryDto! )
        .then((category)=>console.log(category))
        .catch((error)=>console.error({statusCode: error.statusCode, message: error.message}));
    }

    remove = () => {
      const id = "2";

      this.categoriesService.remove(id)
        .then((category)=>console.log(category))
        .catch((error)=>console.error({statusCode: error.statusCode, message: error.message}));
    }
}