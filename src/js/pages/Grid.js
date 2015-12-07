import React from 'react';
import Row from '../components/Row';
import Col from '../components/Col';
import CodeBox from '../components/CodeBox';

class Grid extends React.Component{
  render(){
    return (
      <div className="col-md-12">
        <h1 className="page-header">Grid</h1>
        <h2>An Example</h2>
        <div className="code-example">
            <Row>
              <Col md={8} sm={6} className="bg-fill"></Col>
              <Col md={4} sm={6} className="bg-fill"></Col>
            </Row>
        </div>
        <CodeBox>
          {`
            <Row>
              <Col md={8} sm={6} className="bg-fill"></Col>
              <Col md={4} sm={6} className="bg-fill"></Col>
            </Row>
          `}
        </CodeBox>

        <h2>Slightly More Complicated</h2>
        <div className="code-example">
            <Row>
              <Col md={3} className="bg-fill"></Col>
              <Col md={6} className="bg-fill"></Col>
              <Col md={3} className="bg-fill"></Col>
            </Row>
        </div>
        <CodeBox>
          {`
            <Row>
              <Col md={3} className="bg-fill"></Col>
              <Col md={6} className="bg-fill"></Col>
              <Col md={3} className="bg-fill"></Col>
            </Row>
          `}
        </CodeBox>
      </div>
    )
  }
};

export default Grid;
