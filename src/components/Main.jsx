import React from "react";
import "../styles/main.scss";
import ReactSelect from "./ReactSelect";

import logo from '../assets/logoTsun.png'

export function Main() {
  return (
    <section className="container"> 
      <div className="center">
        <section className="infos">
          <h1>Tsundoku Fontes</h1>
          <img src={logo} alt="Logo" />
          <span>Preencha o formulário para poder baixar suas fontes</span>
          <span>Criado por Axios</span>
        </section>
        
        <section className="order">
          <h1>Formulário</h1>
          <ReactSelect />

        </section>
      </div>
    </section>
    )
}