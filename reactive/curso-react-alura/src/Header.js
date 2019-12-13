import React from "react";
//import { Link } from 'react-router-dom' //Para não recarregar a Página
import LinkWrapper from "./LinkWrapper";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
          Casa do Código
        </LinkWrapper>
        <ul id="nav-mobile" className="right">
          <li>
            <LinkWrapper to="/autores">Autores</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/livros">Livros</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/sobre">Sobre</LinkWrapper>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;

//Utilizamos o LinkWrapper  para o link, alem de que nele esta embutido a estilização de quando o link for clicado
// o activeStyle no Logo esta sobrescrevendo a estilização mencionada acima
