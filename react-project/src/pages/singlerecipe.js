import React from 'react';

function Singlerecipe() {
  return (
    <div>
    {/* main */}
    <main className="page">
      <div className="recipe-page">
      <section className="recipe-hero">
        <img src="./assets/recipes/recipe-4.jpeg" className="img recipe-hero-img" alt="pancakes"/>
        <article>
          <h2>Banana Pancakes</h2>
          <p>Indulge in the ultimate breakfast delight with our Fluffy Banana Pancakes! 
            Immerse yourself in the heavenly fusion of ripe banana sweetness and a light, airy texture. Quick and easy to make, these golden discs of perfection promise to make your mornings unforgettable. 
            Top them with maple syrup or get creative with your favorite toppings for a tropical twist on a classic favorite. Elevate your breakfast experience with these irresistible, fluffy banana pancakes!</p>
            {/* recipe icons */}
            <div className="recipe-icons">
              {/* single recipe icon */}
              <article>
                <i className="fas fa-clock"></i>
                <h5>prep time</h5>
                <p>30 min.</p>
              </article>
             {/* single recipe icon */}
             <article>
              <i className="far fa-clock"></i>
              <h5>cook time</h5>
              <p>15 min.</p>
            </article>     
             {/* single recipe icon */}
             <article>
              <i className="fas fa-user-friends"></i>
              <h5>servings</h5>
              <p>6 servings</p>
            </article>                     
            </div>
            {/* recipe tags */}
            <div className="recipe-tags">
              Tags: <a href="beef.html">beef</a>
              <a href="breakfast.html">breakfast</a>
              <a href="breakfast.html">pancakes</a>
            </div>
        </article>
      </section>
      {/* recipe content */}
      <section className="recipe-content">
        <article>
          <h4>instructions</h4>
          {/* single instruction */}
          <div className="single-instruction"></div>
          <header>
            <p>step 1</p>
            <div></div>
          </header>
          <p>In a large bowl, whisk together the flour, 
            sugar, baking powder, baking soda, and salt.</p>
          {/* single instruction */}
          <div className="single-instruction">
          <header>
            <p>step 2</p>
            <div></div>
          </header>
          <p>In a separate bowl, mash the ripe banana with a fork until smooth.          </p>
        </div>            
          {/* single instruction */}
          <div className="single-instruction">
          <header>
            <p>step 3</p>
            <div></div>
          </header>
          <p>Add the buttermilk, egg, and melted butter to the mashed banana. Mix well.</p>   
        </div>    
        <div className="single-instruction">
          <header>
            <p>step 4</p>
            <div></div>
          </header>
          <p>Pour the wet ingredients into the dry ingredients and stir until just combined. 
            Be careful not to overmix; it's okay if there are a few lumps.</p>   
        </div>                 
        <div className="single-instruction">
          <header>
            <p>step 5</p>
            <div></div>
          </header>
          <p>Heat a griddle or non-stick skillet over medium heat and add a small amount of butter or oil.</p>   
        </div>                 
        <div className="single-instruction">
          <header>
            <p>step 6</p>
            <div></div>
          </header>
          <p>Pour 1/4 cup of batter onto the griddle for each pancake. 
            Cook until bubbles form on the surface, then flip and cook the other side until golden brown.</p>   
        </div>                 
        <div className="single-instruction">
          <header>
            <p>step 7</p>
            <div></div>
          </header>
          <p>Repeat with the remaining batter, adding more butter or oil to the griddle as needed.</p>   
        </div>                 
        <div className="single-instruction">
          <header>
            <p>step 8</p>
            <div></div>
          </header>
          <p>Serve the banana pancakes warm, topped with sliced bananas, maple syrup, chopped nuts, or whipped cream if desired.</p>   
        </div>                                                              
        </article>
        <article className="second-column">
          <div>
            <h4>ingredients</h4>
            <p className="single-ingredient">
              1 cup all-purpose flour
            </p>
            <p className="single-ingredient">
              1 tablespoon sugar
            </p>
            <p className="single-ingredient">
              1 teaspoon baking powder
            </p>        
            <p className="single-ingredient">
              1/2 teaspoon baking sodar
            </p>  
            <p className="single-ingredient">
              1/4 teaspoon salt
            </p>  
            <p className="single-ingredient">
              1 ripe banana, mashed
            </p>  
            <p className="single-ingredient">
              1 cup buttermilk (or 1 cup milk mixed with 1 tablespoon vinegar or lemon juice)
            </p>  
            <p className="single-ingredient">
              1 large egg
            </p>  
            <p className="single-ingredient">
              2 tablespoons unsalted butter, melted
            </p>  
            <p className="single-ingredient">
              Additional butter or oil for cooking
            </p>  
            <p className="single-ingredient">
              Optional toppings: sliced bananas, maple syrup, chopped nuts, or whipped cream
            </p>                  
          </div>
          <div>
            <h4>tools</h4>
            <p className="single-tool">Large mixing bowl</p>
            <p className="single-tool">Whisk or fork</p>
            <p className="single-tool">Measuring cups and spoons</p>
            <p className="single-tool">Griddle or non-stick skillet</p>
            <p className="single-tool">Spatula or pancake turner</p>
            <p className="single-tool">Ladle or cup</p>
            <p className="single-tool">Small bowl or cup</p>
            <p className="single-tool">Fork or potato masher</p>
            <p className="single-tool">Butter or cooking oil</p>
            <p className="single-tool">Optional: Syrup dispenser, whipped cream dispenser, or toppings bowl</p>
          </div>
        </article>
      </section>
      </div>
    </main>
    {/* end main */}      
    </div>
  );
}

export default Singlerecipe;