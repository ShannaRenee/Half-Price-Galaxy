import React from 'react';
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage, navnames }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center mt-4">
      {pages.map((page, index) => (
        <a href={`/${page}`} key={page}>
          <li
            className={`nav-link ${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}
          >
            <img
              src={require(`../../../assets/imgs/${pages[index]}nav.jpg`)}
              className="card-img-top"
              alt={pages[index]}
            />
          </li>
        </a>
      ))}
    </nav>
  );
};

export default Nav;
