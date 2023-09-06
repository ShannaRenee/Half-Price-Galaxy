import React from 'react';
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center mt-4">
      {pages.map((page) => {
        // Convert the page name to lowercase for consistent matching
        const lowercasePage = page.toLowerCase();

        return (
          <a href={`/${page}`} key={page}>
            <li
              className={`nav-link ${lowercasePage === currentPage.toLowerCase() && 'active'}`}
              onClick={() => setCurrentPage(page)}
            >
              <img
                src={require(`../../assets/imgs/${lowercasePage}nav.jpg`)}
                className="card-img-top"
                alt={page}
              />
            </li>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;