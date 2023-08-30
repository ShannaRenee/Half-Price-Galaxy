import React from 'react';
import Nav from '../navbar';
import headerImg from './headerImg.jpg';
import logoImg from './halfpricegalaxylogo.png';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<header className="container-fluid">
			<img src={headerImg} alt="space"/>
			<div className="container d-lg-flex justify-content-lg-between py-3">
				<img className='scaledLogo' src={logoImg} alt="logo"/>
				<Nav
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</header>
	);
};

export default Header;
