import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product.category';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [
    new Product("Football ball", "A Nike football ball, born on the streets of Brazil, ready to bring the thrill of the World Cup to your local park", 3.60, new Blob(), true, ProductCategory.SPORT),
    new Product("Basketball ball", "The Wilson basketball, bouncing on the courts of Harlem, promises the spirit of the NBA in your hands.", 5.70, new Blob(), true, ProductCategory.SPORT),
    new Product("Tennis racquet", "The Babolat Pure Drive, embraced by pros at Wimbledon, will make your backhand as fierce as Federer's", 12.66, new Blob(), false, ProductCategory.SPORT),
    new Product("Pan", "Grandma's old cast-iron pan, seasoned through generations, sizzles with the secrets of countless family recipes", 5.50, new Blob(), false, ProductCategory.HOME),
    new Product("Vacuum cleaner", "The Dyson V11, a futuristic marvel, effortlessly devours dust bunnies, restoring your home to spotless perfection", 120.00, new Blob(), true, ProductCategory.HOME),
    new Product("Sprinkler", "The Melnor Turbo Oscillating Sprinkler dances like a summer rainstorm, transforming your garden into a lush oasis", 3.40, new Blob(), false, ProductCategory.HOME),
    new Product("Potato", "A russet potato, plucked from Idaho's fertile soil, awaits its destiny as crispy fries or a velvety mash", 2.00, new Blob(), true, ProductCategory.FOOD),
    new Product("Tomato", "A vibrant vine-ripened tomato, kissed by the Italian sun, is the star of caprese salads and pasta sauces", 4.00, new Blob(), false, ProductCategory.FOOD),
    new Product("Cheese", "A wheel of French Brie, ripened in cool cellars, beckons with its creamy embrace and delicate aroma", 3.40, new Blob(), false, ProductCategory.FOOD),
    new Product("Shampoo", "Herbal Essences, a fragrant elixir, turns your daily shower into a scented escape to a tropical paradise", 2.00, new Blob(), true, ProductCategory.COSMETICS),
    new Product("Razor", "The Gillette Fusion ProGlide, gliding across your skin, delivers a barber-worthy shave, leaving stubble in the past", 1.02, new Blob(), false, ProductCategory.COSMETICS),
    new Product("Parfume", "Chanel No. 5, a timeless classic, whispers elegance and intrigue with every captivating spray", 30.25, new Blob(), true, ProductCategory.COSMETICS),
    new Product("Boxing gloves", "Everlast gloves, soaked in sweat and determination, spar with champions and novices alike in the pursuit of greatness", 15.26, new Blob(), false, ProductCategory.SPORT),
    new Product("Iron", "The trusty Rowenta steam iron, pressed into service on bustling mornings, smooths wrinkles and prepares you for the day ahead", 56.55, new Blob(), true, ProductCategory.HOME),
    new Product("Olive oil", "Extra-virgin olive oil from the groves of Tuscany, drizzled on salads and pasta, brings Mediterranean magic to your table", 7.80, new Blob(), false, ProductCategory.FOOD),
  ]

  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      of(this.products).subscribe(items => resolve(items));
    });
  }

  getById(id: number): Product{
    return this.products.find(p => p.id == id) ?? new Product("", "", 0, new Blob(), false, 0);
  }

  edit(product: Product){
    var index = this.products.findIndex(p => p.id == product.id);
    this.products[index] = product;
  }

  delete(id: number){
    this.products = this.products.filter(p => p.id != id);
  }

  constructor() { }
}
