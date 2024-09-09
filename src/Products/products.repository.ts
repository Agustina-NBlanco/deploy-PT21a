import { Body, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";



@Injectable()
export class ProductsRepository {

    private Products = [

        {
            id: 1,
            name: 'Laptop',
            description: 'High-performance laptop for gaming and work.',
            price: 1299.99,
            stock: true,
            imgUrl: 'http://example.com/laptop.jpg',
        },
        {
            id: 2,
            name: 'Smartphone',
            description: 'Latest model smartphone with all the newest features.',
            price: 899.99,
            stock: true,
            imgUrl: 'http://example.com/smartphone.jpg',
        },
        {
            id: 3,
            name: 'Headphones',
            description: 'Noise-cancelling over-ear headphones.',
            price: 199.99,
            stock: true,
            imgUrl: 'http://example.com/headphones.jpg',
        },
        {
            id: 4,
            name: 'Smartwatch',
            description: 'Water-resistant smartwatch with heart rate monitor.',
            price: 249.99,
            stock: true,
            imgUrl: 'http://example.com/smartwatch.jpg',
        }
    ]

    async getProductsRepository(page: number, limit: number) {
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit

        return this.Products.slice(startIndex, endIndex)
    }

    async getProductByIdRepository(id: number) {
        const product = await this.Products.find(user => user.id === id)
        return product
    }

    async createProductRepository(product: CreateProductDto) {
        const newProduct = {
            id: this.Products.length + 1,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            imgUrl: product.imgUrl
        }

        this.Products.push(newProduct)
        return newProduct
    }

    async updateProductRepository(id: number, product: UpdateProductDto) {
        const updatedProduct = this.Products.find(product => product.id === id)
        if (!updatedProduct) {
            return null
        }

        Object.assign(updatedProduct, product)
        return updatedProduct
    }

    async deleteProductRepository(id: number) {
        const deletedProduct = this.Products.find(product => product.id === id)
        this.Products = this.Products.filter(product => product.id !== id)
        return deletedProduct
    }
}
