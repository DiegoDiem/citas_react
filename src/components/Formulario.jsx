// rafce
import React from 'react'
import {useState, useEffect} from 'react' 
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(()=>{
        
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])



    const generarId= ()=>{
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        //Validación del Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay almenos un campo vacío');

            setError(true)
            return;
        }

        setError(false)

        // Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario, 
            email, 
            fecha, 
            sintomas
            
        }

        if(paciente.id){
            // Editando el Registro
            objetoPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente: pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

            
        }else{
            //Nuevo registro
            // console.log(objetoPaciente);
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reinicia el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className='font-black text-3xl text-center '>Seguimiento paciente</h2>

        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold '>Administralos</span>
        </p>

        <form onSubmit={handleSubmit} action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            {/* {error?'Hay error':'Todo bien'} Es igual que el de abajo */}
            {/* Condicionando error  */}
            {error &&   <Error> <p>Todos los campos son obligatorios</p> </Error>  }
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="nombre">Nombre Mascota</label>
                <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" 
                placeholder='Nombre de la mascota' id='nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
                <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" 
                placeholder='Nombre del propietario' id='propietario'  value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
                <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" 
                placeholder='Email contacto propietario'  id='email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Alta</label>
                <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" 
              id='alta'  value={fecha} onChange={(e)=> setFecha(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Síntomas</label>
               <textarea name="" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" placeholder='Describe los Síntomas'  value={sintomas} onChange={(e)=> setSintomas(e.target.value)}/>
            </div>

            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'  value={paciente.id ? 'Editar Paciente':'Agregar Paciente'}/>
            
        </form>
    </div>
  )
}

export default Formulario

// rfce
// import React from 'react'

// function Formulario() {
//   return (
//     <div>Formulario</div>
//   )
// }

// export default Formulario