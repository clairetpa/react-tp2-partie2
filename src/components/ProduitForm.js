/* import du css */
import './ProduitForm.css';

import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"

/* Composant ProduitForm pour la gestion du formulaire de creation et de modification d'un produit
Props: la list des produits et les fonctions addProduit et updateProduit */
const ProduitForm = ({listeProduits, addProduit, updateProduit}) => {
    /* Pour pouvoir rediriger vers un path sans recharger la page */
    const navigate = useNavigate();

    const categories = ["Tasses a café et thé", "Ensembles a vaisselle", "Linge de table"];
    /* Recuperation de l'id du produit dans le path */
    let {id} = useParams();
    id = parseInt(id);

    /* valeurs par defaut pour la creation */
    let nomVal = '';
    let descriptionVal = '';
    let prixVal = '';
    let categorieVal = 'Tasses a café et thé';
    let titre = "Creation d'un produit";

    /* Le composant a listeProduits uniquement dans le cas d'une modification */
    if(listeProduits){
        /* le produit a modifier */
        const produit = listeProduits.filter((elt) => elt.id === id)[0];
        /* On met a jour les valeurs avec celle du produit */
        nomVal = produit.nom;
        descriptionVal = produit.description;
        prixVal = produit.prix;
        categorieVal = produit.categorie;
        titre = "Modification d'un produit";
    }
    
    /* les states */
    const [nom, setNom ] = useState(nomVal);
    const [description, setDescritpion ] = useState(descriptionVal);
    const [prix, setPrix ] = useState(prixVal);
    const [categorie, setCategorie] = useState(categorieVal);

    /* Gestion de la soumission du form */
    const onSubmit = (e) => {
        e.preventDefault();

        if(id){ /* cas de la modification, il y a un id */
            const existingProduit = {
                id: id,
                nom: nom,
                description: description,
                prix: prix,
                categorie: categorie
            }
            /* le nouveau produit est passé a la fonction qui modifiera le produit dans App */
            updateProduit(existingProduit);  
        }else{
            const newProduit = {
                nom: nom,
                description: description,
                prix: prix,
                categorie: categorie
            }
            /* le nouveau produit est passé a la fonction qui l'ajoutera dans la liste de produits dans App */
            addProduit(newProduit);
        }
        /* retour a la page des produits */
        navigate('/');
    }

    return(
        <div className="container form-container-padding">
            <div className='title-form-spacing'>
                <h4>{titre}</h4>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 input-spacing">
                        <label htmlFor="Nom_produit" className="form-label">Nom du produit:</label>
                        <input 
                            type="text" 
                            value={nom} 
                            className="form-control" 
                            id="Nom_produit" 
                            placeholder="Entrer ici le nom du produit"
                            onChange={(evt) => {setNom(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="mb-3 input-spacing">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <input 
                            type="text" 
                            value={description} 
                            className="form-control" 
                            id="description" 
                            placeholder="Entrer ici la description du produit"
                            onChange={(evt) => {setDescritpion(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="mb-3 input-spacing">
                        <label htmlFor="prix" className="form-label">Prix du produit:</label>
                        <input 
                            type="text" 
                            value={prix} 
                            className="form-control" 
                            id="prix" 
                            placeholder="Entrer ici le prix du produit"
                            onChange={(evt) => {setPrix(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="input-spacing">
                        <label htmlFor="categorie" className="form-label">Catégorie du Produit:</label>
                        <select 
                            className="form-select" 
                            aria-label="Selection de catégorie"
                            value={categorie} 
                            onChange={(evt) => {setCategorie(evt.target.value)}}
                        >
                            {categories.map((value) => (<option value={value} key={value}>{value}</option>))}
                        </select>
                    </div>
                    <div className='form-btn-spacing'>
                        <button type="submit" className="btn btn-dark">{listeProduits ? 'Modifier': 'Créer'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProduitForm;