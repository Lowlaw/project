import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Recipes() {
  return (
    <div>
      {/* main */}
      <main className="page">
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
            <Link to="/singlerecipe" className="recipe"> {/* Use Link instead of anchor */}
              <img src="./assets/recipes/recipe-1.jpeg" alt="food" className="img recipe-img"/>
              <h5>Karne asada</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe"> {/* Use Link instead of anchor */}
              <img src="./assets/recipes/recipe-2.jpeg" alt="food" className="img recipe-img"/>
              <h5>Baby Back Ribs</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe"> {/* Use Link instead of anchor */}
              <img src="./assets/recipes/recipe-3.jpeg" alt="food" className="img recipe-img"/>
              <h5>Vegetable Soup</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe"> {/* Use Link instead of anchor */}
              <img src="./assets/recipes/recipe-4.jpeg" alt="food" className="img recipe-img"/>
              <h5>Banana Pancake</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}                              
          </div>
          {/* end recipes list */}
        </section>
        {/* end recipes container */}
      </main>
      {/* end main */}      
    </div>
  );
}

export default Recipes;
