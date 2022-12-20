import AppError from "@shared/http/errors/AppError";
import AppDataSource from "@config/AppDataSource";
import { ProductRepository } from "../repositories/ProductsRepository";
import { Product } from '@modules/products/entities/Product';
import { Table } from 'typeorm';

interface IRequest{
    name: string; 
    price: number; 
    quantity: number;
}

class CreateProductService{
 
    public async execute({name, price, quantity}: IRequest){
        const productsRepository = AppDataSource.getRepository(ProductRepository);
        const productExists = await productsRepository.findBy({});

        if(productExists){
            throw new AppError('There is already a product with this name', 200);
        }

        const product = await productsRepository.create({
            name,
            price,
            quantity,
        });

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProductService;