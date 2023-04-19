import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Rimuru from "../assets/images/tensura/rimuru.jpg";
import Diablo from "../assets/images/tensura/diablo.jpg";
import Veldora from "../assets/images/tensura/veldora.jpg";
import Milim from "../assets/images/tensura/milim.jpg";
import Benimaru from "../assets/images/tensura/benimaru.jpg";
import Zegion from "../assets/images/tensura/zegion.jpg";
const Tensura = () => {
  return (
    <div className="">
      <Container className="p-3">
        <div className=" textTensura p-3 d-flex justify-content-center text-light">
          <h1 id="tensura">Tensura</h1>
        </div>
        <Row className="">
          <Col md={4} className="p-2" >
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Rimuru} alt="rimuru" className="images" />
              <Card.Title className="text-center">Rimuru Tempest</Card.Title>
              <Card.Text className="text-center">True Demon Lord</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white me-2 ">
              <Image src={Diablo} alt="diablo" className="images" />
              <Card.Title className="text-center">Diablo</Card.Title>
              <Card.Text className="text-center">Demon Lord</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Veldora} alt="veldora" className="images" />
              <Card.Title className="text-center">Veldora Tempest</Card.Title>
              <Card.Text className="text-center">True Dragon</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Milim} alt="milim" className="images" />
              <Card.Title className="text-center">Milim Nava</Card.Title>
              <Card.Text className="text-center">True Demon Lord</Card.Text>
            </Card>
          </Col>
          <Col md={4} className=" p-2">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Benimaru} alt="benimaru" className="images" />
              <Card.Title className="text-center">Benimaru</Card.Title>
              <Card.Text className="text-center">Flare Lord</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2    ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Zegion} alt="zegion" className="images" />
              <Card.Title className="text-center">Zegion</Card.Title>
              <Card.Text className="text-center">Myst Lord</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tensura;
