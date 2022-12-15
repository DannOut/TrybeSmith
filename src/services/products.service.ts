import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }

  //* Verificar o por que não precisa do async
  public getAll(): Promise<IProduct[]> {
    return this.model.getAll();
  }

  // prettier-ignore
  public async updateProductsByOrder(arrayProducts: number[], orderId: number): Promise<void> {
    await Promise.all(arrayProducts.map((eachproduct) => 
      this.model.updateProductsByOrder(eachproduct, orderId)));
  }
}

export default ProductsService;
