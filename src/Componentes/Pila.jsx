import { useState } from 'react';

function Pila() {
    const [stack, setStack] = useState(["Tania"]);
    const [inputValue, setInputValue] = useState("");

    // Agregar valores a la pila
    const handlePush = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setStack([inputValue, ...stack]);
        setInputValue("");
    };

    // Eliminar valores del arreglo (Pop)
    const handlePop = () => {
        if (stack.length === 0) return;
    
        // Filtrar los elementos y eliminamos el tope de la fila
        const nuevoStack = stack.slice(1);
        setStack(nuevoStack);
    };

    const elementoTope = stack.length > 0 ? stack[0] : `La pila está vacía`;

    return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto' }}>
    <h2>Visualizar los datos de la pila</h2>
            
    {/* Formulario para introducir datos */}
    <form onSubmit={handlePush} style={{ marginBottom: '15px' }}>
    <input 
    type='text' 
    value={inputValue} 
    onChange={(e) => setInputValue(e.target.value)} 
    placeholder='Introduce un Dato' 
    style={{ padding: '8px', marginRight: '10px' }}
    />
    <button type='submit' style={{ padding: '8px 12px', background: '#4caf50',}}>
    Push
    </button>
    </form>

    {/* Botón para eliminar elementos */}
    <button onClick={handlePop} disabled={stack.length===0} style={{ padding: '8px 12px', background: '#f44336', color: 'white', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
     Pop
    </button>

    {/* Información del tope y tamaño */}
    <div style={{ marginBottom: '20px', backgroundColor: '#f0f0f0' , padding: '10px', borderRadius: '4px' }}>
    <p><strong>Elemento tope:</strong> {elementoTope}</p>
    <p><strong>Elementos en la Pila:</strong>{stack.length}</p>
    </div>
    {/* Representación visual de la pila */}
    {stack.map((item, index) => (
    <li key={index}>{item} {index === 0 && '(Tope)'}</li>
    ))}
    </div>
    
    );
}

export default Pila;