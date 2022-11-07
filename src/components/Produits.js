
import Produit from './Produit';

import './Produits.css';

/* Composant Produits qui contient la liste des composants Produit
Les props sont la liste des produits et la fonction supprimer un produit */
const Produits = ({listeProduits,supprimerProduit}) =>{
    return(
        <div className="container">
            <h2 className='presentation-title-style'>
                Découvrez nos produits !
            </h2>
            <div className="row space-around">
                {listeProduits.map((produit)=>(
                    <Produit 
                        key={produit.id}
                        produit={produit}
                        supprimer={supprimerProduit}
                    />
                ))}
                
            </div>
        </div>
    );
}
export default Produits;