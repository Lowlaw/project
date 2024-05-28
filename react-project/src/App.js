import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Recipes from './pages/recipes';
import Singlerecipe from './pages/singlerecipe';
import Tags from './pages/tags';
import Breakfast from './pages/breakfast';
import Beef from './pages/beef';
import Vegetables from './pages/vegetables';
import Dessert from './pages/dessert';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/singlerecipe' element={<Singlerecipe />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/beef' element={<Beef />} />
          <Route path='/vegetables' element={<Vegetables />} />
          <Route path='/dessert' element={<Dessert />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;