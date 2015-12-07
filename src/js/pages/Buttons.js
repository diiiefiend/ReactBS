import React from 'react';
import CodeBox from '../components/CodeBox';
import Button from '../components/Button';

class Buttons extends React.Component{
  render(){
    return (
      <div className="col-md-12">
        <h1 className="page-header">Buttons</h1>
        <h2>Variants</h2>
        <div className="code-example">
          <div className="spacers">
            <Button bsStyle="default">Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button bsStyle="link">Link</Button>
          </div>
        </div>
        <CodeBox>
          {`
            <div className="spacers">
              <Button bsStyle="default">Default</Button>
              <Button bsStyle="primary">Primary</Button>
              <Button bsStyle="success">Success</Button>
              <Button bsStyle="info">Info</Button>
              <Button bsStyle="warning">Warning</Button>
              <Button bsStyle="danger">Danger</Button>
              <Button bsStyle="link">Link</Button>
            </div>
          `}
        </CodeBox>
        <h2>Sizes</h2>
        <div className="code-example">
          <div className="spacers">
            <Button bsStyle="default" bsSize="lg">Large</Button>
            <Button bsStyle="default" bsSize="default">Default</Button>
            <Button bsStyle="default" bsSize="sm">Small</Button>
            <Button bsStyle="default" bsSize="xs">XSmall</Button>
          </div>
        </div>
        <CodeBox>
          {`
            <div className="spacers">
              <Button bsStyle="default" bsSize="lg">Large</Button>
              <Button bsStyle="default" bsSize="default">Default</Button>
              <Button bsStyle="default" bsSize="sm">Small</Button>
              <Button bsStyle="default" bsSize="xs">XSmall</Button>
            </div>
          `}
        </CodeBox>
      </div>
    )
  }
};

export default Buttons;
