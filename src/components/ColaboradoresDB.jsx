const colaboradoresDB = [
    {
    "id": "1156",
    "nombre": "Mario Fernandez",
    "correo": "fdezmario@colaborador.com"
    },
    {
    "id": "3721",
    "nombre": "Esther Bronson",
    "correo": "estherdbron2@colaborador.com"
    },
    {
    "id": "4658",
    "nombre": "Maira Martinez",
    "correo": "mtnzmaira1@colaborador.com"
    }
]

    const min = 1000;
    const max = 9999;

    const initialId= () => Math.floor(Math.random()*(max-min+1)+min);

    const idDB = () => colaboradoresDB.map((colaborador) => colaborador.id = initialId());
export default colaboradoresDB;