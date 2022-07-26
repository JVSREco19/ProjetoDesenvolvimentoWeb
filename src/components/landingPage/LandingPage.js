import './LandingPage.css';
import styled, { css } from 'styled-components'
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState } from 'react';

function LandingPage() {

  const StyledIcone = styled.div`
    width: 2rem;
    height: 2rem;
    top: 15px;
    right: 20px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    .icon {
      width: 2rem;
      height: 0.3rem;
      background-color: ${({ open }) => open ? 'black' : 'white'};
      border-radius: 10px;
      cursor: pointer;
      transform-origin: 1px;
      transition: all 0.3s linear;
     
      &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
      }
  
      &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }

  `;

  const StyledLista = styled.ul`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-betwen;
    position: fixed;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    background-color: whitesmoke;

    li {
      list-style: none;
      margin: 20px;
    }

    li a {
      color: black;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
    }
    li a:hover {
      color: rgba(93, 59, 214, 0.945);
    }
  `

  const [open, setOpen] = useState(false);

  function mint() {

    var id = 1;

    fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor(Math.random() * 100))
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        document.getElementById("imagem1").src = json.url;
        let imgNFT = document.createElement("img");
        let buttonConfig = document.createElement("button");
        let divImage = document.createElement("div");
        imgNFT.src = json.url;
        imgNFT.id = "imgNFT"
        divImage.id = "box-image" + {id};
        buttonConfig.id = "buttonDelete"  
        document.getElementById("galeria-imagens").append(divImage);
        document.getElementById("box-image"+{id}).append(imgNFT);
        document.getElementById("box-image"+{id}).append(buttonConfig);
      })
      .then(function (err) {
        console.log(err);
      })

  }
  return (
    <div className="LandingPage">
      <body>

        <nav id="navbar">

          <StyledLista open={open}>
            <li><a href="#mint-page">NFT</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#projetistas">Projetistas</a></li>
          </StyledLista>

          <StyledIcone open={open} onClick={() => setOpen(!open)}>
            <div className='icon' />
            <div className='icon' />
            <div className='icon' />
          </StyledIcone>

        </nav>

        <section id="mint-page">

          <div id="mint-box">
            <h1 id="mint-title">Clique no botão abaixo para receber sua NFT.</h1>
            <button id="mint-button" type="button" onClick={mint}>Mint</button>
          </div>
          <div id="image">
            <img id="imagem1" src="./../assets/img/nothing.png"></img>
          </div>
        </section>

        <section id="galeria">
          <div id="galeria-imagens">
            
          </div>
        </section>

        <section id="projetistas">
          <div id="projetistas-container">
            <div id="projetistas-box">
              <img id="projetistas-image" src="./../assets/img/perfil01.png" />

              <ul>
                <li>
                  <p id="projetistas-nome">Arthur Henrique Caetano Santos</p>
                </li>
                <li>
                  <p>Engenharia de Computação</p>
                </li>
                <li>
                  <p>Unifei - Campus Itabira</p>
                </li>
                <li>Github: <a href="https://github.com/arthuhenriq" target="_blank" rel="noreferrer">arthuhenriq</a></li>
              </ul>

            </div>

            <div id="projetistas-box">

              <img id="projetistas-image-2" src="./../assets/img/perfil02.jpg" />

              <ul>
                <li>
                  <p id="projetistas-nome">João Victor Silveira Ribeiro</p>
                </li>
                <li>
                  <p>Engenharia de Computação</p>
                </li>
                <li>
                  <p>Unifei - Campus Itabira</p>
                </li>
                <li>Github: <a href="https://github.com/JVSREco19" target="_blank" rel="noreferrer">JVSREco19</a></li>
              </ul>

            </div>
          </div>
        </section>

      </body>
    </div>
  );
}

export default LandingPage;
