import noImageFound from '../img/no-image.jpg';
import './Produit.css';
import { Link }  from 'react-router-dom'

/* Composant Produit qui a comme prop un produit et la fonction supprimer un produit */
const Produit = ({produit, supprimer}) =>{

    /* fonction appelé au clic du bouton supprimer
    Appel la fonction du prop */
    const onDelete = () => {
        supprimer(produit.id)
    }

    return(
        <div className="card produit">
            <div className='image-wrapper'>
                <img src={noImageFound} className='image'/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{produit.nom}</h5>
                <p className="card-text">{produit.description}</p>
                <p className="card-text">{produit.prix}</p>
                <p className="card-text">{produit.categorie}</p>
                <div className="buttons">
                    <Link to={'/produit/'+produit.id} className="btn btn-dark">Voir</Link>
                    <button className="btn btn-danger" onClick={onDelete}>Supprimer</button>
                </div>
            </div>
        </div> 
    );
}
export default Produit;

