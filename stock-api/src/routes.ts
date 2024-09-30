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
import {
  CreateProductController,
  DeleteProductController,
  EditProductController,
  ListProductsController,
  SaleProductController,
} from './controllers/product';

const router = Router();

/* USER */
router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);

/* CATEGORY */
router.post(
  '/category',
  isAuthenticated,
  new CreateCategoryController().handle
);
router.put(
  '/category/edit',
  isAuthenticated,
  new EditCategoryController().handle
);
router.get(
  '/categories',
  isAuthenticated,
  new ListCategoriesController().handle
);
router.delete(
  '/category/delete',
  isAuthenticated,
  new DeleteCategoryController().handle
);

/* PRODUCT */
router.post('/product', isAuthenticated, new CreateProductController().handle);
router.put(
  '/product/edit',
  isAuthenticated,
  new EditProductController().handle
);
router.get('/products', isAuthenticated, new ListProductsController().handle);
router.delete(
  '/product/delete',
  isAuthenticated,
  new DeleteProductController().handle
);
router.put(
  '/product/sale',
  isAuthenticated,
  new SaleProductController().handle
);

export { router };
