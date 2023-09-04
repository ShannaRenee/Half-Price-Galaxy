import React from 'react';
// import { capitalize } from '../../utils/index.js';
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage, navnames }) => {
  console.log(navnames);
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      {pages.map((page) => (
        <a href={`/${page}`} key={page}> {/* Set the href attribute based on the page */}
          <li
            className={`nav-link ${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}
          >
			<img
            src={require(`../../../assets/imgs/${navnames.name}`)}
            class="card-img-top"
            alt={navnames.name}
            />
          </li>
        </a>
      ))}
    </nav>
  );
};

export default Nav;