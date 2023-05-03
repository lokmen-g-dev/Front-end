import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('user:5e7131e2-2193-4ca9-9bc7-3206debf0d57'),
  }),
};
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  productData: any;
  products!: any[];
  product: any;
  constructor(private productService: ProductService, private router: Router,) { }
  ngOnInit():void {
    this.productService.getProduct().subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
}
