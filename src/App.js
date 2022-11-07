import Header from './components/Header';
import Produits from './components/Produits';
import ProduitForm from './components/ProduitForm';
import About from './components/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

const App = () => {

  /* State des produits */
  const [produits, setProduits] = useState([]);
  useEffect(() => {
      const getProduits = async () => {
          const produitsFromServer = await fetchProduits()
          setProduits(produitsFromServer)
      }
      getProduits()
  }, [])



  const fetchProduits = async () => {
      const res = await fetch('http://localhost:5000/produits')
      const data = await res.json()
      return data
  }

  /* Ajouter le produit dans le backend et rajouter le produuit retourné dans le state */
  const addProduit = async (produit) => {
    const res = await fetch('http://localhost:5000/produits',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(produit)
      })
      const newProduit = await res.json();

      setProduits([...produits, newProduit])
  }

  /* Modifier un produit en appelant le backend avec la method PUT et mettre a jour le state */
  const updateProduit = async (produit) => {
    const res = await fetch('http://localhost:5000/produits/'+produit.id,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(produit)
      })
      const newProduit = await res.json();
      const newProduits = produits.map(p => {
        if(newProduit.id === p.id){
          return newProduit;
        } else {
          return p;
        }
      });
      setProduits(newProduits)
  }

  /* Supprimer le produit en appelant le backend avec la method DELETE et l'id
  en cas de succes (200) on met a jour le state */
  const supprimerProduit = async (id) => {
    const res = await fetch('http://localhost:5000/produits/'+id,{
      method: 'DELETE'
    });
    await res.json();
    if(res.status === 200){
      const newProduits = produits.filter(produit => produit.id !== id);
      setProduits(newProduits);
    }
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Produits listeProduits={produits} supprimerProduit={supprimerProduit}/>} />
          <Route path='/create' element={<ProduitForm addProduit={addProduit}  />} />
          <Route path='/produit/:id' element={<ProduitForm listeProduits={produits} updateProduit={updateProduit} supprimerProduit={supprimerProduit} />} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
