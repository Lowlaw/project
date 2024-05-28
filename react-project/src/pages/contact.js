import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Contact() {
  return (
    <div>
      {/* main */}
      <main className="page">
        <section className="contact-container">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>We value your feedback and inquiries! Whether you have a question about a recipe, want to share your cooking successes, or simply wish to connect, we'd love to hear from you. Feel free to reach out to us at [otacanryan@gmail.com] or use the form below.</p>
            <p>Your thoughts and messages are important to us, and we'll do our best to get back to you as soon as possible. Thank you for being a part of Tasty Recipes – let's stay in touch and continue our culinary journey together!</p>
          </article>
          <article>
            <form className="form contact-form">
              {/* single form row */}
              <div className="form-row">
                <label htmlFor="name" className="form-label">your name</label>
                <input type="text" name="name" id="name" className="form-input"/>
              </div>
              {/* end single form row */}
              {/* single form row */}
              <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" name="email" id="email" className="form-input"/>
              </div>
              {/* end single form row */}   
              <div className="form-row">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-block">submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5 className="featured-title">Try out these delicious Recipes!</h5>
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

export default Contact;
