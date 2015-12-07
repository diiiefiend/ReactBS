import React from 'react';

class CodeBox extends React.Component{
  render(){
    return(
      <pre>
        <code>
          {this.props.children}
        </code>
      </pre>
    )
  }
}

export default CodeBox;
