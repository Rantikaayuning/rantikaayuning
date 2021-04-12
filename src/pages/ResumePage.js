import React, { useState } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import Resume from '../assets/cvicon.jpg';
import { jsPDF } from "jspdf";
import Page1 from '../assets/page1.png';
import Page2 from '../assets/page2.png';

const ResumePage = () => {
  const [isView, setView] = useState(false)

  const handleView = () => {
    const doc = new jsPDF();
    doc.addImage(Page1, "PNG", 0, 0, 210, 297);
    doc.addPage("a4", "m");
    doc.addImage(Page2, "PNG", 0, 0, 210, 297);
    window.open(doc.output('bloburl'))
    setView(true)
  }
  
  return (
    <div className='resume-container'>
      <p className='title'>CV</p>
      <h3>
        <i class="bi bi-cloud-arrow-down"></i>{' '}
        <i class="bi bi-cloud-arrow-down"></i>{' '}
        <i class="bi bi-cloud-arrow-down"></i>
      </h3>
      <div className='card-container'>
      <Row>
        <Col xl="12">
          <Card body>
            <CardTitle tag="h5" className='title'>CV</CardTitle>
            <CardImg top width="100%" height="50%" src={Resume} alt="Card image cap" /><br/>
            {isView ? (
              <Button outline color='dark' disabled>View</Button>
            ) : (
              <Button outline color='info'onClick={() =>  handleView()}>View</Button>
            )}
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ResumePage;

