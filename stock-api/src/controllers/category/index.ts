import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";
import { EditCategoryService } from "../../services/category/EditCategoryService";
import { ListCategoriesService } from "../../services/category/ListCategoryService";


class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoryService = new ListCategoriesService();
    const categories = await listCategoryService.execute();
    return response.json(categories);
  }
}

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const createCategoryService = new CreateCategoryService();
    
    try {
      const category = await createCategoryService.execute(name as string);
      return response.json(category);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const category_id = request.query.category_id as string;
    const editCategoryService = new EditCategoryService();
    const categoryEdited = editCategoryService.execute({ name, category_id });
    return response.json(categoryEdited);
  }
}

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;
    const removeCategoryService = new DeleteCategoryService();

    try {
      const category = await removeCategoryService.execute(category_id);
      return response.json(category);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export {ListCategoriesController, CreateCategoryController, EditCategoryController, DeleteCategoryController };
