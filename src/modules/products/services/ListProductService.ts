import Product from "../entities/Product";
import { ProductRepository } from "../repositories/ProductsRepository";

export class ListProductService{
 
    productsRepository: ProductRepository;

    public async execute(): Promise<Product[]>{
        
        //const productsRepository = AppDataSource.getRepository(ProductRepository);
       
        const products = await this.productsRepository.list();

        return products;
    }
}