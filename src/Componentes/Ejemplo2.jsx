import { useState } from "react";

export default function Ejemplo2() {
    const [alumnos, setAlumnos]= useState([{id: 1, nombre: "Tania", asistencia:""}])
    const [nuevonombre, setNuevonombre]= useState("");
    //Crear primera función
    const agregaralumno=(e)=>{
        e.preventDefault();
        if(nuevonombre.trim()==="") return;
        const nuevoAlumno={
            id:Date.now(),
            nombre:nuevonombre,
            asistencia: 0
        }
        //Introducir valores al arreglo
        setAlumnos([...alumnos,nuevonombre]);
        setNuevonombre("");
        console.log(alumnos);
    }
    //Eliminar objetos
    const eliminarObjetos=(id)=>{
        const listaFilter=alumnos.filter((alumno)=>alumno.id===id);
        setAlumnos(listaFilter);
    }
    return (
        <div style={{padding:"20px", maxWidth: "50px", margin: "o auto"}}>
            <h1>Operaciones con arreglos</h1>
            {/*Formulario para agregar arreglos */}
            <form onSubmit={agregaralumno} style={{marginBottom: "20px"}}>
                <input type= 'text' value={nuevonombre} onChange={(e)=>setNuevonombre(e.target.value)} placeholder="Ingresa un nuevo nombre" style={{padding:"8px 12px", marginRight: "10px", width: "60%"}}/>
                <button type='submit' style={{padding: "8px 12px"}}/>
            </form>
        </div>
    )
}
