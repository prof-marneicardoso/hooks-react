import { useState } from "react";

export default function UseState() {
    // Hook (é em JavaScript)
    const [isVisible, setVisible] = useState();

    // Alterna entre as visibilidades (true ou false)
    function toggleVisibilidade() {
        // alternarVisibilidade
        setVisible(!isVisible);
    }

    return (
        // JSX, somente HTML, JavaScript dentro de {chaves}
        <div>
            <h1>React Hooks</h1>

            <button onMouseDown={toggleVisibilidade}>
                {isVisible ? "Esconder" : "Mostrar"}
                {/* {isVisible ? 'IF: Esconder' : (!isVisible ? "ELSE IF: Não é visível" : "Else") } */}
            </button>

            {isVisible && <p>Esta é a mensagem!</p>}
        </div>
    );
}
