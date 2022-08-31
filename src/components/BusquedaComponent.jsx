import React, { useState } from 'react';
import { Button, Navbar, Container, Form, Table, } from 'react-bootstrap';

function BodyComponent(props) {

    const [buscarColaborador, setBuscarColaborador] = useState("");
    const colaboradores = props.colaboradores;

    const inputBuscar = (e) => {
        setBuscarColaborador(e.target.value)
        filtrarBusqueda(e.target.value)
    }

    const filtrarBusqueda = (busquedaFinal) => {
        const resultadoBuscar = colaboradores.filter((colaborador)=>{
            if(colaborador.nombre.toString().toLowerCase().includes(busquedaFinal.toLowerCase())
            ){
                return colaborador;
            }
        });
        props.setColaboradores(resultadoBuscar);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" className='d-flex justify-content-between'>
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src='https://www.nicepng.com/png/full/102-1023343_collaboration-plan-nacional-del-buen-vivir-2017-al.png'
                            width="100"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            value={buscarColaborador}
                            type="search"
                            placeholder="Buscar..."
                            className="me-2"
                            aria-label="Search"
                            onChange={inputBuscar}
                        />
                        <Button style={{ backgroundColor: '#464F41', borderColor: 'black' }} variant='dark'>Buscar</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default BodyComponent;
