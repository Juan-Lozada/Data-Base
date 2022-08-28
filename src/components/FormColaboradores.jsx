import React from 'react'
import { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'

const FormColaboradores = (props) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState(false);

    const capturarCorreo = (e) => setCorreo(e.target.value);
    const capturarNombre = (e) => setNombre(e.target.value);

    const agregarColaborador = (e) => {
        e.preventDefault();
    
    const min = 1000;
    const max = 9999;

    const idUnico= () => Math.floor(Math.random()*(max-min+1)+min);

    if (nombre === '' || correo === '' ) {
        setError(true);
        return alert('Porfavor, llene todo los campos.') ;
    } else {
        setError(false);
    }
        
    const colaborador = {
        id: idUnico(),
        nombre: nombre,
        correo: correo,
            
    }
        
        props.guardarColaborador(colaborador);
        setNombre('')
        setCorreo('')
        console.log(colaborador)
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
                        required
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Correo electronico"
                        aria-label="Correo electronico"
                        aria-describedby="basic-addon2"
                        value={correo}
                        onChange={capturarCorreo}
                        pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                        required
                    />
                    <InputGroup.Text id="basic-addon2" className='bg-dark text-light'>@example.com</InputGroup.Text>
                </InputGroup>
                <Button variant='dark' type='submit'>Agregar colaborador</Button>
            </Form>
        </>
    )

}

export default FormColaboradores;
