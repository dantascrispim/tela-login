import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();


        alert("enviando os dados:" + username +"-" + password)
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
          <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className="icons"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className="icons"/>
        </div>
        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de min
            </label>
            <a href="#">Esqueceu a Senha?</a>
        </div>
        <button>
            Entrar
        </button>

        <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Registrar</a>
            </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
