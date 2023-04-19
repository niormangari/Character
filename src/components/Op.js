import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Luffy from "../assets/images/onepiece/luffy.jpg";
import Zoro from "../assets/images/onepiece/zoro.jpg";
import Sanji from "../assets/images/onepiece/sanji.jpg";
import Usop from "../assets/images/onepiece/usop.jpg";
import Jinbei from "../assets/images/onepiece/jinbei.jpg";
import Chopper from "../assets/images/onepiece/chopper.jpg";
const Op = () => {
  return (
    <div className="">
      <Container className="p-3 ">
        <div className=" textOp p-3 d-flex justify-content-center" id="op">
          <h1>One</h1>
          <h1>Piece</h1>
        </div>
        <Row className="rounded">
          <Col md={4} className="p-2">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Luffy} alt="luffy" className="images rounded" />
              <Card.Title className="text-center">Monkey D Luffy</Card.Title>
              <Card.Text className="text-center">Kapten</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white me-2 ">
              <Image src={Zoro} alt="zoro" className="images rounded" />
              <Card.Title className="text-center">Roronoa Zoro</Card.Title>
              <Card.Text className="text-center">Pendekar Pedang</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Sanji} alt="sanji" className="images rounded" />
              <Card.Title className="text-center">Vinsmoke Sanji</Card.Title>
              <Card.Text className="text-center">Koki</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2 ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Usop} alt="usop" className="images rounded" />
              <Card.Title className="text-center">Usopp</Card.Title>
              <Card.Text className="text-center">Penembak Jitu</Card.Text>
            </Card>
          </Col>
          <Col md={4} className=" p-2">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Jinbei} alt="jinbei" className="images rounded" />
              <Card.Title className="text-center">Jinbe</Card.Title>
              <Card.Text className="text-center">Pengemudi Kapal</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="p-2    ">
            <Card className="imagee bg-dark text-white  me-2 ">
              <Image src={Chopper} alt="chopper" className="images rounded" />
              <Card.Title className="text-center">Tony Tony Copper</Card.Title>
              <Card.Text className="text-center">Dokter</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Op;
