import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notify: string;
  products: Product[];

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
      } else {
        this.notify = "Please Login to save cart or checkout";
      }
    });
    // display products from database
    this.productService.getProducts().subscribe(data => {this.products = data});
  }

}
