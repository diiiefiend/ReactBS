import React from 'react';
import classNames from 'classnames';

const SIZES = {
  'xs': true,
  'sm': true,
  'md': true,
  'lg': true
};

class Col extends React.Component{
  render(){
    let classes = {};

    Object.keys(this.props).forEach(function (key){
      if(SIZES[key]){
        classes[`col-${key}-${this.props[key]}`] = true;
      }
    }.bind(this));

    let classDesc = '';

    Object.keys(classes).map(function (classname){
      classDesc += `${classname} `;
    });

    return(
      <div {...this.props} className={classNames(this.props.className, classes)}>
        <p>{classDesc}</p>
      </div>
    )
  }
};

export default Col;
