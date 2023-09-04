import React from 'react';
import Nav from '../navbar';
import headerImg from './headerImg.jpg';
import logoImg from './halfpricegalaxylogo.png';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header className="container-fluid">
      <img className="junkityjunk" src={headerImg} alt="space" />
      <div className="container text-center py-3"> {/* Center the content */}
        <a href='/' className='text-center'>
          <img className='scaledLogo' src={logoImg} alt="logo" />
        </a>
        <div className="border border-dark rounded z-index-1 mt-3"> {/* Add margin-top for spacing */}
          <Nav
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;