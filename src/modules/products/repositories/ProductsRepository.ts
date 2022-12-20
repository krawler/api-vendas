import { Repository } from "typeorm";
import Product from "../entities/Product";
import AppDataSource from "@config/AppDataSource";

export class ProductRepository {

    entityManager = AppDataSource.manager;

    public async findByName(name: string): Promise<Product | null>{
        const product = this.entityManager.findOne<Product>(Product, {
            where: { 
                name,
            },    
        });
        
        return product;
    }

    public async list(): Promise<Product[]>{
        return this.entityManager.find(Product, undefined);
    }
}