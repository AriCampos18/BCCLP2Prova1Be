import { Container, Form, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { ContextoUsuario } from "../App";

export default function TelaLogin(){

    const nomeUsuario=useRef();
    const cpfUsuario=useRef();
    const endereco =useRef();
    const cidade=useRef();
    const uf=useRef();

    const {usuario, setUsuario}=useContext(ContextoUsuario); //valor fornecido

    function manipularSubmissao(evento){
        const usuarioDigitado=nomeUsuario.current.value;
        const enderecoDigitado=endereco.current.value;
        const cpfDigitado=cpfUsuario.current.value;
        const cidadeDigitada=cidade.current.value;
        const ufDigitada=uf.current.value;

        if(usuarioDigitado!=='' && enderecoDigitado!=='' && cpfDigitado!=='' && cidadeDigitada!=='' && ufDigitada!==''){
            setUsuario({
                "usuario":usuarioDigitado,
                "cpf":cpfDigitado,
                "endereco":enderecoDigitado,
                "cidade":cidadeDigitada,
                "uf":ufDigitada,
                "logado":true
            });
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return(
        <Container className="w-25 border p-2">
            <Form onSubmit={manipularSubmissao}>
            <Form.Group className="mb-3" controlId="formBasicUsuario"
                        >
                <Form.Label>Nome</Form.Label>
                <Form.Control 
                            name="usuario" 
                            type="text" 
                            placeholder="Enter username" 
                            ref={nomeUsuario}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEndereco"
                        >
                <Form.Label>Endereco</Form.Label>
                <Form.Control 
                            name="endereco" 
                            type="text" 
                            placeholder="Enter username" 
                            ref={endereco}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCidade"
                        >
                <Form.Label>Cidade</Form.Label>
                <Form.Control 
                            name="cidade" 
                            type="text" 
                            placeholder="Enter username" 
                            ref={cidade}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUf"
                        >
                <Form.Label>UF</Form.Label>
                <Form.Control 
                            name="uf" 
                            type="text" 
                            placeholder="Enter username" 
                            ref={uf}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                            name="cpf" 
                            type="text" 
                            placeholder="Password" 
                            ref={cpfUsuario}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
        </Container>
    )
}