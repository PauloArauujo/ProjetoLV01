import Header from "./Header";
import Footer from "./Footer";
import CatalagoProduto from "./CatalogoProduto";

const Lancamento = ({ produtos }) => {
  return (
    <div>
      <Header />
      <CatalagoProduto nomes={produtos} />
      <h2 className="azulhome"></h2>
      <p className="letreiroHomeVejaMais">VEJA MAIS</p>
      <CamisasTime nomes={produtos} />
      <CatalagoProduto nomes={produtos} />
      <Footer />
    </div>
  );
};

export default Lancamento;