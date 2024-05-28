import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Home() {
  return (
    <div>
      {/* main */}
      <main className="page">
        {/* header */}
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1>tasty recipes</h1>
              <h4>tasty recipes for you and your family.</h4>
            </div>
          </div>
        </header>
        
        {/* body */}
        <section id="hero">
          <div className="hero-slider">
            <div className="arrow prev">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="arrow next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            {/* slider */}
            <h2 className="featured-title">Try out these delicious Recipes!</h2>
            <div className="slider-container">
              <div className="slider">
                <div className="slide">
                  <img src="assets/recipes/recipe-1.jpeg" alt="Slide Image" className="slide-img" />
                </div>
                <div className="slide">
                  <img src="assets/recipes/recipe-2.jpeg" alt="Slide Image" className="slide-img" />
                </div>
                <div className="slide">
                  <img src="assets/recipes/recipe-3.jpeg" alt="Slide Image" className="slide-img" />
                </div>
                <div className="slide">
                  <img src="assets/recipes/recipe-4.jpeg" alt="Slide Image" className="slide-img" />
                </div>
              </div>
            </div>
            {/* slider ending */}
            {/* slider dot */}
            <div className="slider-dot"></div>
            {/* slider dot end */}
          </div>
        </section>
        {/* end header */}

        {/* recipes container */}
        <section className="recipes-container">
          {/* tag container */}
          <div className="tags-container">
            <h4>Recipes</h4>
            <div className="tags-list">
              {/* Use Link instead of anchor */}
              <Link to="/beef">Beef</Link>
              <Link to="/breakfast">Breakfast</Link>
              <Link to="/vegetables">Vegetables</Link>
              <Link to="/dessert">Dessert</Link>
            </div>
          </div>
          {/* end tag container */}
          {/* recipes list */}
          <div className="recipes-list">
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-1.jpeg" alt="food" className="img recipe-img" />
              <h5>Karne Asada</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-2.jpeg" alt="food" className="img recipe-img" />
              <h5>Baby Back Ribs</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-3.jpeg" alt="food" className="img recipe-img" />
              <h5>Vegetable Soup</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-4.jpeg" alt="food" className="img recipe-img" />
              <h5>Banana Pancake</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
          </div>
          {/* end recipes list */}
        </section>
        {/* end recipes container */}

        <div className="team">
          <h1>Our <span>Team</span></h1>
          <div className="team_box">
            <div className="profile">
              <img src="assets/images/team1.jpg" alt="Team Member" />
              <div className="info">
                <h2 className="name">Ryan</h2>
                <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="team_icon"></div>
              </div>
            </div>
            <div className="profile">
              <img src="assets/images/team1.jpg" alt="Team Member" />
              <div className="info">
                <h2 className="name">Otacan</h2>
                <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="team_icon"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
