import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from 'react-bootstrap'
 
function Landing() {
  return <Container>
    <Button>按钮</Button>
    <Row>
      <Col>
        <h1>Next.js React Bootstrap</h1>
      </Col>
    </Row>
  </Container>
}
 
export default Landing;