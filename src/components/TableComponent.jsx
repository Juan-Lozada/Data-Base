import React from 'react';
import {Table} from 'react-bootstrap'

function TableComponent (props) { 

    

    return (
        <>
            <div style={{ backgroundColor: '#464F41' }}>
                <div className='bg-dark text-light p-4 mb-1'>
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-12 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Colaborators DataBase </h5>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />
                        </div>
                    </div>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.colaboradores.map((colaborador) => (
                            <tr key={colaborador.id}>
                                <td>{colaborador.id}</td>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableComponent;
