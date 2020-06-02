import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';


const Directory = ({sections}) => {
  return (
    // Destructure section as well.
    <div className='directory-menu'>
      {sections.map(({id, ...sectionProps}) => {
        return (
          <MenuItem 
            key={id} 
            { ...sectionProps } />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => createStructuredSelector({
  sections: selectDirectorySections,
})


export default connect(mapStateToProps)(Directory);
