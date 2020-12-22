import React from 'react';
import './styles.css';

function CadastroLP() {
  return (
    <div className="backgroundCadastro">
      <h1 className="cadastro-title">Cadastre-se agora mesmo</h1>
      <div className="divInput">
        <input className="inputEmail" type="text" placeholder="Seu e-mail" />
        <button className="btnCadastroPeq">Cadastre-se</button>
      </div>
    </div>
  )
}

export default CadastroLP;