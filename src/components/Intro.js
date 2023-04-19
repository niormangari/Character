import { Col, Row, Container, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className=" intro d-flex justify-content-center align-items-center h-50">
      <Container className="text-white text-center align-items-center justify-content-center d-flex ">
        <Row>
          <Col className="alltitle d-flex">
            <div className=" title1 fs-1 fw-bold lh-1 text-dark ">My </div>
            <div className=" title fs-1 fw-bold lh-1 ">Favorit </div>
            <div className=" title1 fs-1 fw-bold lh-1 text-dark">Caracter </div>
            <div className=" title fs-1 fw-bold lh-1  ">Anime </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-white text-center align-items-center justify-content-center d-flex mt-2">
        <Row>
          <Col className="">
            <Button className=" button bg-dark border-white">
              <div>List</div>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
