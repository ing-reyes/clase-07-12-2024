import { CategoriesController } from "./categories/categories.controller";
import { CategoriesService } from "./categories/categories.service";

(async () => {
    const categoriesService = new CategoriesService()
    const categoriesController = new CategoriesController(categoriesService);

    console.log( categoriesController.findAll() );
})()