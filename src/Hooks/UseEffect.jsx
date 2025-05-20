import { useEffect, useState } from "react";
import './useEffect.css';

export default function UseEffect() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Esta Function é uma Promise
        async function buscarDados() {
            // Busca os dados usando o link, usando await (espera)
            const response = await fetch('https://67620a7446efb3732373870b.mockapi.io/api/product');
            const dados = await response.json();   // Converte a resposta para JSON
            console.log(dados);
            
            // Adiciona os dados buscados através do setUsuarios, no array
            setUsuarios(dados);
            setLoading(false);
        }

        buscarDados();
    }, []); // Executa apenas uma vez, após o primeiro render

    if (loading) {
        return (
            <div>Carregando...</div>
        );
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>

            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        Nome: {usuario.name},
                        Descrição: {usuario.description}
                        <br />
                        <img src={usuario.image} />
                        <h4>{usuario.price}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}
