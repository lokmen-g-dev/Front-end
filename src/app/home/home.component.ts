import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/Products.service';
import { ProduitDTO } from '../AppDTO/ProductDTO';
import { FormBuilder } from '@angular/forms';
import { PanierService } from '../Services/Panier.service';
import { PanierDTO } from '../AppDTO/PanierDTO';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit{
  constructor(private productsService: ProductsService,private panierService:PanierService, protected formBuilder: FormBuilder) { }

  produits: ProduitDTO[]=[]; 
  panier: PanierDTO = new PanierDTO(); 
  
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data : any) => {
      console.log(data);

      if (Array.isArray(data)) {
        this.produits = data;
      } else {
        this.produits.push(data);
      }
      
    });

  }
  
  async add(idProduit :any ,produit:any){
   let idClient:string ="2" ;
 
        this.panier.quantite=2;
        this.panier.totalprice=900.3 ;
        console.log(this.panier);
        try{
          this.panierService.addNewPanier(this.panier,idProduit.toString(),idClient).subscribe((data:any)=>{
            console.log("data");
          });
          alert("Ajout avec succée !");
        }catch(error){
          alert("Ajout n'est pas fait !")

        }
       
           
       
        
       
    
  }


}
