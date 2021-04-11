import React from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import Resume from '../assets/cvimg.jpg';

const ResumePage = (props) => {
  return (
    <div className='resume-container'>
      <h4>Here is my CV</h4>
      <div className='card-container'>
      <Row>
        <Col xl="12">
          <Card body>
            <CardTitle tag="h5">CV</CardTitle>
            <CardImg top width="100%" height="50%" src={Resume} alt="Card image cap" /><br/>
            <Button outline color='info'>Download</Button>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ResumePage;

