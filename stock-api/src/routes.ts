import { Router } from 'express';
import {
  CreateCategoryController,
  ListCategoriesController,
  EditCategoryController,
  DeleteCategoryController,
} from './controllers/category';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

/* USER */
router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);

/* CATEGORY */
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.put(
  "/category/edit",
  isAuthenticated,
  new EditCategoryController().handle
);
router.get(
  "/categories",
  isAuthenticated,
  new ListCategoriesController().handle
);
router.delete(
  "/category/delete",
  isAuthenticated,
  new DeleteCategoryController().handle
);

export { router };
