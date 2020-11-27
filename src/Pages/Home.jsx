import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../Styles/Pages/home.css';

import Menu from '../Components/Menu'


function Home() {
  return (
    <div id="page-landing">
    <Menu/>
     <div className="content-wrapper">
        <main>
          <h1>Minhas QUEENS</h1>
          <p>Minhas Drag Race favoritas</p>
        </main>       

        <Link  to="/Drag" className ="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)"/>
        </Link>
     </div>
    </div>
  );
}

export default Home;
