import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import ColaboradoresDB from './ColaboradoresDB.json';
import {useState} from 'react';
import FormColaboradores from './components/FormColaboradores';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import TableComponent from './components/TableComponent';

function App() {
  
  const [colaboradores, setColaboradores] = useState(ColaboradoresDB);
  console.log(ColaboradoresDB)

  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(guardarColaborador);
  }

  const eliminarColaborador = (e) => {
    console.log("eliminarColaborador");
  }
  
  return (
    <>
      < NavbarComponent />
      < FormColaboradores 
        guardarColaborador={guardarColaborador}
      />
      < TableComponent 
        eliminarColaborador={eliminarColaborador}
        colaboradores={colaboradores}
      />
      < FooterComponent />
    </>
  );
}

export default App;
