import React, { useState, MouseEvent, useRef } from 'react';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Modal from '../../components/Modal';
import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
          <Link to="create-point">
            <span>
              <FiLogIn />
            </span>
            Cadastre um ponto de coleta
          </Link>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrrem pontos de coleta de forma eficiente
          </p>
          <Link to="/search">
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
