import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]= useState({});

  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))??[];
      setPacientes(pacientesLS)
    }

    obtenerLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !==id)

    setPacientes(pacientesActualizados)
  }


// Mandar una funcion a través del prop 
  // const imprime2mas2 = ()=>{
  //   console.log(2+2);
  // }

  // const toma1Valor = (valor)=>{
  //   console.log(valor);
  // }

  return (
    <div className="container mx-auto mt-20">
      {/* {edad >= 18 ? 'Es mayor de edad': 'No es mayor de edad'}
      <h1>Diego</h1>
      <h2>{'Hola mundo'.toUpperCase()}</h2> */}


      <Header 
        // numeros = {1}
        // fn={imprime2mas2}
        // toma1Valor={toma1Valor}
      />
      <div className="mt-12 md:flex">

        <Formulario 
          pacientes= {pacientes}
          setPacientes ={setPacientes}
          paciente = {paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
