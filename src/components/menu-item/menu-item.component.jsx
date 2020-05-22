import React from 'react';

// withRouter: Takes a component and modifies it in some way, sort of like a function.
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// Destructure values from props
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	return (
    <div 
      className={`${size} menu-item`} 
      onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div 
        style={{
          backgroundImage: `url(${imageUrl})`
        }} 
        className="background-image"
      />
			<div className="content">
				<h1>{title.toUpperCase()}</h1>
				<span>SHOP NOW</span>
			</div>
		</div>
	);
};

// Returns MenuItem component with location, match, and history props.
export default withRouter(MenuItem);
