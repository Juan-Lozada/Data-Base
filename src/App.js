import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import ColaboradoresDB from './components/ColaboradoresDB';
import {useState} from 'react';
import FormColaboradores from './components/FormColaboradores';
import TableComponent from './components/TableComponent'
import FooterComponent from './components/FooterComponent';
import BodyComponent from './components/BusquedaComponent';

function App() {
  
  const [colaboradores, setColaboradores] = useState(ColaboradoresDB);

  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const dataColab = colaboradores;
  
  return (
    <>
      < BodyComponent colaboradores={colaboradores} setColaboradores={setColaboradores} />
        < FormColaboradores guardarColaborador={guardarColaborador}/>
      < TableComponent colaboradores={colaboradores} />
    
      < FooterComponent />
    </>
  );
}

export default App;
