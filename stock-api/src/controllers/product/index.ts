import { Request, Response } from "express";
import { CreateProductRequest } from "../../models/product/CreateProductRequest";
import { CreateProductService } from "../../services/product/CreateProductService";
import { DeleteProductService } from "../../services/product/DeleteProductService";
import { EditProductRequest } from "../../models/product/EditProductRequest";
import { EditProductService } from "../../services/product/EditProductService";
import { ListProductService } from "../../services/product/ListProductService";
import { SaleProductRequest } from "../../models/product/SaleProductRequest";
import { SaleProductService } from "../../services/product/SaleProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      description,
      category_id,
      amount,
    }: CreateProductRequest = request.body;
    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      description,
      category_id,
      amount,
    });

    return response.json(product);
  }
}

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const product_id = request.query.product_id as string;
    const deleteProductService = new DeleteProductService();

    const productDeleted = await deleteProductService.execute({ product_id });
    return response.json(productDeleted);
  }
}

class EditProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      description,
      product_id,
      amount,
      category_id,
    }: EditProductRequest = request.body as unknown as EditProductRequest;
    const editProductService = new EditProductService();

    const productEdited = editProductService.execute({
      name,
      amount,
      description,
      price,
      product_id,
      category_id,
    });
    return response.json(productEdited);
  }
}

class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProductsService = new ListProductService();
    const products = await listProductsService.execute();

    return response.json(products);
  }
}

class SaleProductController {
  async handle(request: Request, response: Response) {
    const product_id = request.query.product_id as string;
    const { amount }: SaleProductRequest = request.body;
    const saleProductService = new SaleProductService();

    const saleProduct = await saleProductService.execute({
      product_id,
      amount,
    });
    return response.json(saleProduct);
  }
}

export {CreateProductController, DeleteProductController, EditProductController, ListProductsController, SaleProductController};