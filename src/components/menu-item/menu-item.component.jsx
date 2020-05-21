import React from 'react';

import './menu-item.styles.scss';

// Destructure values from props
const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`${size} menu-item`}>
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

export default MenuItem;
