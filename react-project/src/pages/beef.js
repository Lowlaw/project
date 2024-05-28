import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Beef() {
  return (
    <div>
      {/* main */}
      <main className="page">
        <div>
          <h4>Beef</h4>
          {/* recipes list */}
          <div className="recipes-list">
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-1.jpeg" alt="food" className="img recipe-img"/>
              <h5>Karne Asada</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-2.jpeg" alt="food" className="img recipe-img"/>
              <h5>Baby Back Ribs</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-3.jpeg" alt="food" className="img recipe-img"/>
              <h5>Vegetable Soup</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
            {/* single recipe */}
            <Link to="/singlerecipe" className="recipe">
              <img src="./assets/recipes/recipe-4.jpeg" alt="food" className="img recipe-img"/>
              <h5>Banana Pancake</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </Link>
            {/* end single recipe */}
          </div>
          {/* end recipes list */}
        </div>
      </main>
      {/* end main */}
    </div>
  );
}

export default Beef;
