import { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2020,3,19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@email.com',
        data: new Date(2020,3,22),
        mensagem: 'Olá, tudo bem sim...'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarcomentario = (evento) => {
    evento.preventDefault();
    console.log("Adicionando comentario...")
    const novoComentario = { ...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome:'', email:'', mensagem:''}
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c!==comentario)
    this.setState({comentarios: lista})
  }

  digitacao = evento => {   
    const {name, value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice} 
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data} 
            onRemove = {this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

          {/*sugestão para aprendizado... colocar esse form como um componente*/}
        <form method="post" onSubmit={this.adicionarcomentario} className="Novo-Comentario">
          <h2>Adiconar comentario</h2>
          <div>
            <input 
              type="text" 
              name="nome" 
              value={this.state.novoComentario.nome} 
              onChange = {this.digitacao}
              placeholder="Digite seu nome"
              required />
          </div>
          <div>
            <input 
              type="email" 
              name="email" 
              value={this.state.novoComentario.email} 
              onChange={this.digitacao} 
              placeholder="Digite seu email"
              required/>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              rows="4" 
              onChange={this.digitacao} 
              value={this.state.novoComentario.mensagem}
              required/>
          </div>
          <button type="submit">Adicionar comentário</button>
        </form>

      </div>
    );
  }
}

export default App;
