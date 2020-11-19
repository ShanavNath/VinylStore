import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts()
      .subscribe(
        products => {
          console.log(products);
          this.products = products
        }
      );
  }

}
