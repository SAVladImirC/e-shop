import { ProductCategory } from "./product.category";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: Blob;
    isPopular: boolean;
    category: ProductCategory;

    constructor($name: string, $description: string, $price: number, $image: Blob, $isPopular: boolean, $category: ProductCategory) {
        this.id = Math.random() * 100;
        this.name = $name;
        this.description = $description;
        this.price = $price;
        this.image = $image;
        this.isPopular = $isPopular;
        this.category = $category;
    }
}