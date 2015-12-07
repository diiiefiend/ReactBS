import React from 'react';
import CodeBox from '../components/CodeBox';

class CSS extends React.Component{
  render(){
    return (
      <div className="col-md-12">
        <h1 className="page-header">CSS</h1>
        <h2>Headings</h2>
        <div className="code-example">
          <h1>h1 header</h1>
          <h2>h2 header</h2>
          <h3>h3 header</h3>
          <h4>h4 header</h4>
        </div>
        <CodeBox>
          {`
              <h1>h1 header</h1>
              <h2>h2 header</h2>
              <h3>h3 header</h3>
              <h4>h4 header</h4>
          `}
        </CodeBox>
      </div>
    )
  }
};

export default CSS;
