import Header from "./Header";
import Footer from "./Footer";
import CatalagoProduto from "./CatalogoProduto";
import CamisasTime from "./CatalogoProduto1";
import ItemCamisa from "./ItemCamisa";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Carrosel1 from "./img/Puma.jpg";
import Carrosel2 from "./img/Bape.jpg";
import Carrosel3 from "./img/Adidas.jpg";

const Home = ({ produtos }) => {
  return (
    <div>
      <Header />
      <Carousel className="carousel-home">
        <Carousel.Item interval={1000}>
          <img className="CarroselTeste" src={Carrosel1}></img>
          <Carousel.Caption>
            <h3>Puma</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="CarroselTeste" src={Carrosel2}></img>
          <Carousel.Caption>
            <h3> Nike</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="CarroselTeste" src={Carrosel3}></img>
          <Carousel.Caption>
            <h3>Adidas</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CatalagoProduto nomes={produtos} />
      <h2 className="azulhome"></h2>
      <p className="letreiroHomeVejaMais">VEJA MAIS</p>
      <CamisasTime nomes={produtos} />
      <CatalagoProduto nomes={produtos} />
      <Footer />
    </div>
  );
};
export default Home;
