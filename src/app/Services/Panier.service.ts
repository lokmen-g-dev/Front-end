import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PanierDTO } from '../AppDTO/PanierDTO';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/Ecommerce/panier'
  getPanier() {
    return this.http.get<PanierDTO[]>('http://localhost:8081/Ecommerce/panier/GetPanier');
  }

  addNewPanier(body:PanierDTO,idproduit:string,idclient:string){
    return this.http.post<string>(`http://localhost:8081/Ecommerce/panier/add-panier/` + idproduit + `/` + idclient, body);
  }
  
  removePanier(idLignePanier:string){
    return this.http.delete('http://localhost:8081/Ecommerce/panier/remove-panier/'+idLignePanier);
  }

  modifyPanier(data:any){
    return this.http.put('${this.apiUrl}/remove-panier/${update-panier}',data);
  }
}