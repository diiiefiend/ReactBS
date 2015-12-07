import React from 'react';
import classNames from 'classnames';

class FormGroup extends React.Component{
  render(){
    let classes = {'form-group': true};

    return (
      <div className={classNames(this.props.className, classes)}>
        {this.props.children}
      </div>
    );
  }
};

export default FormGroup;
