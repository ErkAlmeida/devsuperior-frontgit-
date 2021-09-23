import React from "react";
import ButtonP from "../../core/components/ButtonP";
import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => (
    <div className="home-content">
      <div className="home-text">
        <h1 className="text-title">Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
        <p className="text-subtitle">
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
          Favor observar as instruções passadas no capítulo sobre a <br/> elaboração deste projeto.
          Este design foi adaptado a partir de Ant Design System for Figma, de <br/> 
          Mateusz Wierzbicki: antforfigma@gmail.com
        </p>
        <p>
          Dev Front e Back: Erick Almeida Santos
        </p>
      </div>
      <div className="btn-p">
        <Link to="/profile">
          <ButtonP text="Começar" />
        </ Link>
      </div>
      
    </div>
);

export default Home;