import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { CompanyService } from '../company.service';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();
  companies: Company[];
  company: Company = new Company();

  constructor(private productService: ProductService,
    private companyService: CompanyService,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(result => {
      this.product = result;
      this.companyService.getById(this.product.company).subscribe((result) => {
        this.company = result;
      })
    });
  }


  deleteProductById(id: any) {
    this.productService.deleteProductById(id).subscribe((result) => {
      console.log('Company Deleted Successfully..')
      this._location.back();
    })
  }

  goBack(): void {
    this._location.back();
  }

}
