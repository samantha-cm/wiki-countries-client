import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import countriesArray from "../data.json";

export default function CountriesList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get(
        `https://wiki-countries-server.herokuapp.com/api/countries`
      );
      const country = await data.data;
      setCountries(country);
    };
    getCountries();
  }, []);

  console.log("countries", countries);
  return (
    <Container>
      <Row xs={1} className="g-4">
        {countries.map((e) => (
          <Col xs={3}>
            <Card>
              <Card.Img variant="top" fluid="true" src={e.flag} />
              <Card.Body>
                <Card.Title>
                  <Link to={`${e.alpha3Code}`}> {e.name} </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
