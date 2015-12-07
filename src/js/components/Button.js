import React from 'react';
import classNames from 'classnames';

class Button extends React.Component{
  render(){
    let classes = {};
    classes = {
      'btn': true,
      active: this.props.active
    };
    this.props['bsStyle'] ? classes[`btn-${this.props['bsStyle']}`] = true : false;
    this.props['bsSize'] ? classes[`btn-${this.props['bsSize']}`] = true : false;

    return (
      <button {...this.props} type='button' className={classNames(this.props.className, classes)}>
        {this.props.children}
      </button>
    );
  }
};

export default Button;
