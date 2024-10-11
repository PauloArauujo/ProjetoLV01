import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemCamisa = ({ imagem, valor, nome }) => {
  const [fav, setFav] = useState(false); // Inicializa como false
  const [items, setItems] = useState({}); // Inicializa um objeto vazio

  // Função para armazenar um produto no localStorage
  const armazenar = (chave, produto) => {
    // Armazena o produto no localStorage
    localStorage.setItem(chave, JSON.stringify(produto));
  };

  const handleFavClick = () => {
    setFav(prevFav => !prevFav);
  };

  // Defina os itens que deseja armazenar
  const handleAddItem = () => {
    const novoItem = { nome, valor, imagem };
    setItems(novoItem); // Atualiza o estado de items
    armazenar('lv_nome', novoItem); // Armazena o novo item no localStorage
  };

  const mostrarAdd = () => {
    if (handleAddItem = true) {
      alert("Adicionado ao carrinho com sucesso")
    }
  }

  return (
    <div className="pagina-home">
      <div>
        <div className="cubo">
          <Link to={`/${nome}`}>
            <div className="quadrado">
              <img src={imagem} alt={nome} />
              <div className="quadradoValor">
                <p className="valor">{valor}</p>
              </div>
            </div>
          </Link>
          <div className="DescProduto">
            <p>{nome}</p>
            <button onClick={handleAddItem} className="btnArmazenar">

              <FontAwesomeIcon icon={faPlus} className="iconProduto" />
            </button>
            {fav ? (
              <FontAwesomeIcon
                icon={faHeartSolid}
                className="iconProduto"
                onClick={handleFavClick}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeartRegular}
                className="iconProduto"
                onClick={handleFavClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCamisa;
