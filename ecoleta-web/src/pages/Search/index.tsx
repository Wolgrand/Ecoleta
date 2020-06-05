import React, { useState, MouseEvent, useRef } from 'react';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

const Search = () => {
  return (
    <div id="page-search-results">
      x{' '}
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="create-point">
          <span>
            <FiArrowLeft />
          </span>
          Cadastre um ponto de coleta
        </Link>
      </header>
      <main>
        <h4>
          <strong>2 pontos </strong>
          encontrados
        </h4>
        <div className="cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80"
              alt="Colectoria"
            />
            <h1> Colectoria </h1>
            <h3> Resíduos Eletrônicos, Lâmpadas </h3>
            <p>
              Rio do Sul, Santa Catarina
              <br />
              Guilherme Gemballa, Jardim América
              <br />
              Nº 260
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="Papersider"
            />
            <h1> Papersider </h1>
            <h3> Papéis e Papelão </h3>
            <p>
              Rio do Sul, Santa Catarina
              <br />
              Guilherme Gemballa, Jardim América
              <br />
              Nº 260
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
