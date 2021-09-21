import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section middle">
      <a href="post/61399a785cf3f500272e491d">
        <Card 
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          title= "Dragon's Den"
          description="Home for dragon."
          price="৳7000/Night"
        />
        </a>
      </div>
      <div className="home__section">
      <a href="post/61399a9e5cf3f500272e491e">
        <Card
          src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg"
          title="Toothless Hotel"
          description="Nice view in Dhaka"
          price="৳4000/night"
        />
        </a>
        <a href="post/61399abc5cf3f500272e491f">
        <Card
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          title="Hiccup Hotel"
          description="Near Chittagong Mountains"
          price="৳5500/night"
        />
        </a>
        <a href="post/61399ae95cf3f500272e4920">
        <Card
          src="https://cdn.wallpapersafari.com/21/92/sikwuT.jpg"
          title="Astrid's Den"
          description="Skyscrapper"
          price="৳5000/night"
        />
        </a>
      </div>
    </div>
  );
}

export default Home;
