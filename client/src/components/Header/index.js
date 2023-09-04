import React from 'react';
import Nav from '../navbar';
import headerImg from './headerImg.jpg';
import logoImg from './halfpricegalaxylogo.png';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage, navnames }) => {
  return (
    <header className="container-fluid">
      <div className="container text-center py-3">
        <a href='/' className='text-center'>
          <img className='scaledLogo' src={logoImg} alt="logo" />
        </a>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        navnames={navnames}
      />
      </div>
      <img className="junkityjunk" src={headerImg} alt="space" />
    </header>
  );
};

export default Header;
