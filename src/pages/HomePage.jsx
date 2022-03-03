import { Container, Row, Col } from "react-bootstrap"

import CountriesList from "./../components/CountriesList";
import CountryDetails from "./../components/CountryDetails";

function HomePage() {
  return (
    <> 
      <Container>
        <Row>
          <Col >
            <CountriesList />
          </Col>
          {/* <Col xs={8}>
            <CountryDetails/>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
