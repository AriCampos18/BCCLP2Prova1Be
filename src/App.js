import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";
import Carrinho from "./templates/Carrinho";
import Produto from "./templates/Produto";
import { createContext } from "react";

export const ContextoUsuario=createContext();

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  const [qtdeCarrinho, setQtdeCarrinho] = useState(0);

  const [usuario,setUsuario]=useState({
    "usuario":"",
    "cpf":"",
    "endereco":"",
    "cidade":"",
    "uf":"",
    "logado":false
  });

  return (
    <div className="App">
      <ContextoUsuario.Provider value={{usuario,setUsuario}}>
        <Cabecalho/>
        <BarraBusca/>
        <GradeProdutos listaProdutos={produtos}/>
        <Carrinho qtdeCarrinho={qtdeCarrinho}
                  setQtdeCarrinho={setQtdeCarrinho} />  
        <Produto />
      </ContextoUsuario.Provider>
    </div>
  );
}

export default App;
