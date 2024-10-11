import "./App.css";
import CatalagoProduto from "./CatalogoProduto";
import CamisasTime from "./CatalogoProduto1";
import Header from "./Header";
import Footer from "./Footer";
import ExibeProduto from "./ExibeProduto";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCamisa from "./ItemCamisa";
import Cadastro from "./Cadastro";
import Login from "./Login";
import produtos from "./Services";
import Home from "./home";
import Carrinho from "./Cart";
import Colaborador from "./Colaborador";
import CadastroColaborador from "./CadastroColaborador";
import Lancamento from "./Lancamento";

function App() {
  const nomesProdutos = [
    "Camisa Preta",
    "Camisa branca",
    "Camisa azul",
    "Camisa Preta",
  ];

  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Home produtos={nomesProdutos} />,
    },
    {
      path: "/seach",
      element: <ExibeProduto catalago={produtos} />,
    },
    {
      path: "/:nome",
      element: <ExibeProduto catalago={produtos} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cadastro",
      element: <Cadastro />,
    },
    {
      path: "/carrinho",
      element: <Carrinho />,
    },
    {
      path: "/colaborador",
      element: <Colaborador />
    },
    {
      path: "/CadastroColaborador",
      element: <CadastroColaborador />
    },
    {
      path: "/Lancamento",
      element: <Lancamento />
    }

  ]);

  return (
    <>
      <RouterProvider router={rotas} />
    </>
  );
}
export default App;
