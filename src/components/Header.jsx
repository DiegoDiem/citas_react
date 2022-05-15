function Header(){


    // console.log(numeros);
    // // consultar una funcion traída desde los props ya sea jalar todos los props o de forma destructuring
    // fn();

    // // enviar en base a una función información al padre:
    // const variableHeader =true;
    // toma1Valor(variableHeader)

    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
        
    )
}

export default Header;