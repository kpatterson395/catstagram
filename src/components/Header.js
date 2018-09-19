import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<h1  id="cat-header"><Link id="cat-link" to={"/"}>Goatstagram</Link></h1>
	)
}


export default Header;