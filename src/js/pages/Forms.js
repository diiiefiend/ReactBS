import React from 'react';
import Input from '../components/Input';
import FormGroup from '../components/FormGroup';
import CodeBox from '../components/CodeBox';

class Forms extends React.Component{
  render(){
    return (
      <div className="col-md-12">
        <h1 className="page-header">Forms</h1>
        <h2>A Simple Form</h2>
        <div className="code-example">
          <FormGroup>
            <Input type="text" label="text" className="tester-class" placeholder="text input" />
          </FormGroup>
        </div>
        <CodeBox>
          {`
            <FormGroup>
              <Input type="text" label="text" className="tester-class" placeholder="text input" />
            </FormGroup>
          `}
        </CodeBox>
      </div>
    )
  }
};

export default Forms;
