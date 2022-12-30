import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Issue({ issueId, title, type, priority, status, description, submittedBy, assignedTo, onDragStart}) {


    return (
        // <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title><a href="#">Title Goes Here</a></Card.Title>              
        //         {/* <Card.Text>
        //         Some quick example text to build on the card title and make up the
        //         bulk of the card's content.
        //         </Card.Text> */}
        //         <Form>
        //             <Form.Group as={Row} className="mb-3" controlId="formAssignedTo">
        //                 <Form.Label column sm="2">Assigned To</Form.Label>
        //                 <Col sm="10">
        //                     <Form.Select size="sm">
        //                         <option>Map User list Here</option>
        //                     </Form.Select>
        //                 </Col>                      
        //             </Form.Group>
        //             <Form.Group as={Row} className="mb-3" controlId="formStatus">
        //                 <Form.Label column sm="2">Status</Form.Label>
        //                 <Col sm="10">
        //                     <Form.Select size="sm">
        //                         <option>Map status list Here</option>
        //                     </Form.Select>
        //                 </Col>                      
        //             </Form.Group>
        //         </Form>
        //         <Card.Link href="#">View Detail</Card.Link>
        //     </Card.Body>
        // </Card>

        <div className="issue-wrapper"
            draggable
            onDragStart={(e) => onDragStart(e, issueId)}
        >
            <h5 className="issue-title">{title}</h5>
            <span>Id: {issueId}</span>
            <br />
            <span>type: {type}</span>
            <br />
            <span>priority: {priority}</span>
            <br />
            <span>status: {status}</span>
        </div>
    )
}


