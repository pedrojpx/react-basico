import React from 'react';
import './Comentario.css';
import imagemUsuario from './user.png';

//JSX
const Comentario = props => {
    /*não estamos usamos usando isso, mas há inda essa possibilidade de colocar estilos
    teria que colocar style={estilo} na tag desejada
    const estilo = {
        color: 'red',
        padding: '10px',
        fontSize: '30px'
    }*/

    return <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome}/>
        <div className="conteudo">
            <h2 className="nome">{props.nome}:</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
};

export default Comentario;