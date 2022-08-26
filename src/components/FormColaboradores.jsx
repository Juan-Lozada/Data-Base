import React from 'react'
import { useState } from 'react'
import { Button, InputGroup, Form, Container } from 'react-bootstrap'

const FormColaboradores = (props) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [alerta, setAlert] = useState(null);

    const capturarCorreo = (e) => setCorreo(e.target.value)

    const agregarColaborador = (e) => {
        e.preventDefault();
        
        const colaborador = {
            nombre: nombre,
            correo: correo,

        }

        props.guardarColaborador(colaborador);
        console.log(colaborador)
    }

    const capturarNombre = (e) => {
        if (e.target.value === "" ) {
            setAlert("El nombre no es valido, porfavor intente de nuevo")
        }
        setNombre(e.target.value)
    }

    return (
        <>
            <Form className='d-flex justify-content-center flex-column gap-3 p-5' onSubmit={agregarColaborador}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='bg-dark text-light'>@</InputGroup.Text>
                    <Form.Control 
                        placeholder="Colaborador"
                        aria-label="Colaborador"
                        aria-describedby="basic-addon1"
                        value={nombre}
                        onChange={capturarNombre}
                        
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Correo electronico"
                        aria-label="Correo electronico"
                        aria-describedby="basic-addon2"
                        value={correo}
                        onChange={capturarCorreo}
                    />
                    <InputGroup.Text id="basic-addon2" className='bg-dark text-light'>@example.com</InputGroup.Text>
                </InputGroup>
                <Button variant='dark' type='submit'>APRETAME SUAVEMENTEEE</Button>
            </Form>
        </>
    )

}

export default FormColaboradores;
