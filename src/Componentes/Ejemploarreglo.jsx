import { useEffect, useState } from "react";

function Ejemploarreglo() {
    //Iniciamos con un estado para arreglo
  const [elementos, setElementos]= useState([]);

  //Crear una función para agregar datos
  const agregarDatos=()=>{
    const nuevoNumero=Math.floor(Math.random()*50);
    setElementos([...elementos, nuevoNumero]);
  };

  //Método para recorrer el arreglo
  const recorrerArreglo=(elementos,index)=>(
    <li key={index} style={{margin: `5px 0`, fontSize: `18px`}}>
        Elementos #{index + 1}:<strong>{elementos}</strong>
    </li>
  )

  //Hook de efecto
  useEffect(()=>{
console.log("El areglo de datos actual es: ", elementos)
  },[elementos])


  //Empieza el return
  return (
     <>
    <h1>Yei, Mi primer arreglo de datos</h1>
   <div style={{padding: `20px`}}>
    <h2>Paso 1. Agregar datos al arreglo</h2>
    <button onClick={agregarDatos}>Agregar numero aleatorio</button>
    <ul>
      {/* Si el arreglo está vacío enviar un mensaje */}

      {elementos.length === 0 ? (
        <>
          <p>Aún no hay elementos en el arreglo</p>
          <p>Presiona el botón de agregar datos</p>
        </>
      ) : (
        elementos.map(recorrerArreglo)
      )}

    </ul>
  </div>
</>
);
}

export default Ejemploarreglo