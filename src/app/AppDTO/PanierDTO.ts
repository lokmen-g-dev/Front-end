import { ClientDTO } from "./ClientDTO";
import { ProduitDTO } from "./ProductDTO";



export class PanierDTO {
    idLignePanier?: number;
    quantite?: number;
    totalprice?: number;
    codePromo?: string;
    produit?:ProduitDTO;
    client?:ClientDTO;
}