import React from 'react';
import './style.css';

const Footer = () => {
	const icons = [
		{
			name: 'fab fa-github',
			link: 'https://github.com/ShannaRenee/Half-Price-Galaxy',
		}
	];
	return (
		<footer className="d-flex justify-content-center align-items-center">
			{icons.map((icon) => (
				<a
					href={icon.link}
					key={icon.name}
					target="_blank"
					rel="noreferrer"
					className="mx-3"
				>
					<i className={icon.name}></i>
				</a>
			))}
		</footer>
	);
};

export default Footer;
