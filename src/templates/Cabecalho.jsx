import logo from "../assets/imagens/ricardoeletro.png";
import { ContextoUsuario } from "../App";
import { useContext } from "react";

export default function Cabecalho(props){

    const {usuario, setUsuario}=useContext(ContextoUsuario); 

    return(
        <header style={
            {
                margin: '0px',
                padding: '0px',
            }
        }>
            <img src={logo} alt="Logo"/>      
            <div>
                <p>Usuario logado: {usuario.usuario}</p>   
                <button onClick={()=>{
                    setUsuario({
                        "usuario":"",
                        "cpf":"",
                        "endereco":"",
                        "cidade":"",
                        "uf":"",
                        "logado":false
                    })
                }}> Sair </button>
                </div>
        </header>
    );
}