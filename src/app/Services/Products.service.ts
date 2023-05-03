import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitDTO } from '../AppDTO/ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/Ecommerce/produit';
  
  getAllProducts() {
    return this.http.get<ProduitDTO[]>('http://localhost:8081/Ecommerce/produit/GetProduit');
  }

  addNewProduct(data:any){
    return this.http.post('${this.apiUrl}/GetProduit',data);
  }
}