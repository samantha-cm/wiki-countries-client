import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, ListGroup, ListGroupItem,Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export default function CountryDetails() {
    const { countryid } = useParams();
    console.log(countryid);
    const [newCountry, setNewCountry] = useState({})



    useEffect(() => {
        const getCountry = async ()  => { 
            const {data} = await axios.get(`https://wiki-countries-server.herokuapp.com/api/countries/${countryid}`)
            const country = data.data[0]
            setNewCountry(country)

        }
        getCountry()
    },[])

    console.log(newCountry);
  return (
    <Container>
        <Card >
            <Row>
                <Col xs={4}>
                    <Card.Img variant="top" src={newCountry.flag} />
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Title>{newCountry.name}</Card.Title>
                    
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Capital: {newCountry.capital}</ListGroupItem>
                            <ListGroupItem>Area: {newCountry.area} km<sup>2</sup></ListGroupItem>
                            <ListGroupItem>Code: {newCountry.alpha3Code}</ListGroupItem>
                        </ListGroup>
                    <Card.Body>
                        {
                        newCountry.borders?.map((e) =>  <> <Link to={`/${e}`}>{e}</Link> &nbsp; </>)
                        }
                    </Card.Body>
                </Col>
            </Row>
            
            
        </Card>
    </Container>
  )
}
