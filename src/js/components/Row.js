import React from 'react';
import classNames from 'classnames';

class Row extends React.Component{
  render(){
    return(
      <div {...this.props} className={classNames(this.props.className, 'row')}>
        {this.props.children}
      </div>
    )
  }
};

export default Row;
