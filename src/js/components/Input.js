import React from 'react';
import classNames from 'classnames';

class Input extends React.Component{
  render(){
    let classes = {'form-control': true};

    return (
      <div>
        <label htmlFor={this.props.id} className={classNames(this.props.className, 'control-label')}>{this.props.label}</label>
        <input type={this.props.type} className={classNames(this.props.className, classes)} placeholder={this.props.placeholder} />
      </div>
    );
  }
};

export default Input;
