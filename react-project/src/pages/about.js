import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function About() {
  return (
    <div>
      {/* main */}
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Welcome to Tasty Recipes</h2>
            <p>At Tasty Recipes, we believe in the magic of homemade meals. Welcome to a space where simplicity meets flavor, and every recipe is a celebration of good taste.</p>
            <h2>About Us</h2>
            <p>Founded with a passion for sharing delightful recipes, Tasty Recipes is a haven for food enthusiasts. Our goal is to make cooking enjoyable and accessible, whether you're a seasoned chef or just starting your culinary journey.</p>

            <p>Join us in exploring the joy of home-cooked goodness. Let's cook up something wonderful together!</p>
            <Link to="/contact" className="btn">contact</Link> {/* Replace <a> with Link */}
          </article>
          <img src="./assets/images/about.jpeg" alt="pouring salt" className="img about-img"/>
        </section>
        <section className="featured-recipes">
          <h5 className="featured-title">Try out these delicous Recipes!</h5>
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
          </div>
          {/* end recipes list */}
        </section>
      </main>
      {/* end main */}
    </div>
  );
}

export default About;
