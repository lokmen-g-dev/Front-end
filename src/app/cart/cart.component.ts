import { Component } from '@angular/core';
import { ProductsService } from '../Services/Products.service';
import { PanierService } from '../Services/Panier.service';
import { FormBuilder } from '@angular/forms';
import { PanierDTO } from '../AppDTO/PanierDTO';
import { data } from 'jquery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  constructor(private productsService: ProductsService,private panierService:PanierService, protected formBuilder: FormBuilder) { }
  panierList :PanierDTO[]=[] ; 
  quantite: number=1 ;
  total :number=0 ;
  ngOnInit() {
    this.panierService.getPanier().subscribe((data : any) => {
  
      if (Array.isArray(data)) {
        this.panierList = data;
      } else {
        this.panierList.push(data);
      }
      console.log("panierList",this.panierList);
      
    });
    
  }
  remove(idLignePanier:any){
    this.panierService.removePanier(idLignePanier).subscribe((data :any)=>{
        console.log("dataaa removed" ,data);
        
    });
      window.location.reload();
      console.log("quantité" ,this.quantite);
  }

  getValue() {
    console.log("The value of the input element is: " + this.total);
  }
}
