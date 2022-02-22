import Nav from "./components/Nav/Nav"
import Switcher from "./components/Switcher/Switcher";
import Button from "./components/Button/Button";
import Annonce from "./components/Annonce/Annonce";
import Category from "./components/Category/Category";
import ScrollContainer from 'react-indiana-drag-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useState } from "react";

function App() {
  const [likedArticles, setLikedArticles] = useState([]);

  const articles = [{
    title: "Appareil Photo Vintage", price: "50", img: "alexander-andrews-soLEw77Napo-unsplash.jpg" 
  }, {
    title: "Tabouret", price: "10", img: "ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg"
  }, {
    title: "Réveil", price: "5", img: "insung-yoon-w2JtIQQXoRU-unsplash.jpg"
  }, {
    title: "Polaroid", price: "25", img: "patrick-OIFgeLnjwrM-unsplash.jpg"
  }, {
    title: "Clé anglaise", price: "3", img: "recha-oktaviani-t__61ap00Mc-unsplash.jpg"
  }, {
    title: "Skate cruiser", price: "32", img: "mike-meyers-LcZnOtKtOUc-unsplash.jpg"
  }, {
    title: "Lampe", price: "19", img: "jonny-caspari-wsvCC6UyKjs-unsplash.jpg"
  }, {
    title: "Tabouret", price: "10", img: "ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg"
  }, {
    title: "Réveil", price: "5", img: "insung-yoon-w2JtIQQXoRU-unsplash.jpg"
  }]

  const catégories = [{
    name: "Mobilier", img: "neonbrand-mGZX2MOPR-s-unsplash.jpg"
  }, {
    name: "Multimédia", img: "domenico-loia-EhTcC9sYXsw-unsplash.jpg"
  }, {
    name:"Voitures", img: "chuttersnap-gts_Eh4g1lk-unsplash.jpg"
  }]

  const addFavorite = (id, img, title) => {
    setLikedArticles([...likedArticles, {id: id, img: img, title: title}]);
  }

  const deleteFavorite = (id) => {
    setLikedArticles(likedArticles.filter((e) => (e.id !== id)));
  }

  const wishlist = likedArticles.map((article, i) => {
    const image = require(`./components/media/${article.img}`);
    return (
      <div className="cardFavorites" key={i}>
        <div style={{width: "20%"}} >
          <img src={image} alt={article.title}/> 
        </div>
        <div style={{color: "#6189d3", fontWeight: "700", fontSize: "12px", width: "60%", alignSelf: 'center'}} >
          <p>{article.title}</p>
        </div>
        <div 
          style={{width: "20%", fontSize:"12px", color: "#6189d3", alignSelf: 'center'}} 
          onClick={() => deleteFavorite(article.id)}>
          <FontAwesomeIcon icon={faTrashCan}/>
        </div>
      </div>
    )
  })

  const articlesList = articles.map((article, i) => {
    let result =  likedArticles.find((e) => e.id === i)
    let liked = false;
    if (result !== undefined){
     liked = true;
    }
    console.log("result", result)
    return (
      <Annonce 
              title={article.title} 
              price={article.price} 
              img={article.img} 
              key={i} 
              id={i} 
              addFavoriteParent = {addFavorite}
              deleteFavoriteParent = {deleteFavorite}
              isLiked = {liked}
            />
    )
  })

  return (
      <div>
        
        <div className="header">
          
          <div className="banner">
            <Nav wishlist = {wishlist}/>
            <Switcher/>
          </div>
          <span className="searchButton" >
            <Button name="Rechercher"/>
          </span>
        </div>

        <h1>Catégories</h1>
        <ScrollContainer className="annonces">
          {catégories.map((catégorie, i) => (
            <Category name={catégorie.name} img={catégorie.img} icon={catégorie.icon}/>
          ))}
        </ScrollContainer>

        <h1>Ces annonces pourraient vous intéresser</h1>
        <ScrollContainer className="annonces">
          {articlesList}
        </ScrollContainer>
       
      </div>
  );
}

export default App;
