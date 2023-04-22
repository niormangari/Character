import { Col, Row, Container } from "react-bootstrap";
const Intro = () => {
  return (
    <div className=" intro d-flex justify-content-center align-items-center h-50">
      <Container className="text-white text-center align-items-center justify-content-center d-flex ">
        <Row>
          <Col className="alltitle d-flex">
            <div className=" title1 fs-1 fw-bold lh-1 text-dark ">My </div>
            <div className=" title fs-1 fw-bold lh-1 ">Favorite </div>
            <div className=" title1 fs-1 fw-bold lh-1 text-dark">Character </div>
            <div className=" title fs-1 fw-bold lh-1  ">Anime </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
