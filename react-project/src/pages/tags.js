import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Tags() {
  return (
    <div>   
      {/* main */}
      <main className="page">
        <section className="tags-wrapper">      
          {/* single tag */}
          <Link to="/beef" className="tag"> {/* Use Link instead of anchor */}
            <h5>beef</h5>
          </Link>
          {/* end single tag */}
          {/* single tag */}
          <Link to="/breakfast" className="tag"> {/* Use Link instead of anchor */}
            <h5>breakfast</h5>
          </Link>
          {/* end single tag */}      
          {/* single tag */}
          <Link to="/vegetables" className="tag"> {/* Use Link instead of anchor */}
            <h5>Vegetables</h5>
          </Link>
          {/* end single tag */}      
          {/* single tag */}
          <Link to="/dessert" className="tag"> {/* Use Link instead of anchor */}
            <h5>Dessert</h5>
          </Link>
          {/* end single tag */}     
        </section>
      </main>
      {/* end main */}
    </div>
  );
}

export default Tags;