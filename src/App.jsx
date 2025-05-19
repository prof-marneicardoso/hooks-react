import { useState } from 'react';

export default function App() {
  // Hook (é em JavaScript)
  const [isVisible, setVisible] = useState(false);

  // Alterna entre as visibilidades (true ou false)
  function toggleVisibilidade() {
    setVisible(!isVisible);
  }

  return (
    // JSX, somente HTML, JavaScript dentro de {chaves}
    <div>
      <h1>React Hooks</h1>

      <button onClick={toggleVisibilidade}>
        {isVisible ? 'Esconder' : 'Mostrar'}
      </button>

      {isVisible && <p>Esta é a mensagem!</p>}
    </div>
  )
}
