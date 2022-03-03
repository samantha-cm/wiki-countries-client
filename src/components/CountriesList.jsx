import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import countriesArray from "../data.json"


export default function CountriesList() {
  return (
    <Container >
        <Row xs={1} className="g-4">
            {
                countriesArray.map((e) =>(
                    <Col xs={3}>
                        <Card>
                            <Card.Img variant="top" fluid="true" src={ e.flag } />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`${e.alpha3Code}`}> { e.name } </Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>

    
  )
}
