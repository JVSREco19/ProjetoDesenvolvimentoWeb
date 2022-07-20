
import './LandingPage.css';

function LandingPage() {
  function mint() {
    fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor(Math.random() * 100))
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        document.getElementById("imagem1").src = json.url;
        let imgNFT = document.createElement("img");
        imgNFT.src = json.url;
        document.getElementById("galeria-imagens").append(imgNFT);
      })
      .then(function (err) {
        console.log(err);
      })
  }
  return (
    <div className="LandingPage">
      <body>

        <nav id="navbar">
          <ul id="menu">
            <li><a href="#mint-page">NFT</a></li>
            <li><a href="#projetistas">Projetistas</a></li>
            <li><a href="#galeria">Galeria</a></li>
          </ul>
        </nav>

        <section id="mint-page">

          <div id="mint-box">
            <h1 id="mint-title">Clique no botão abaixo para receber sua NFT.</h1>
            <button id="mint-button" type="button" onclick="mint()">Mint</button>
          </div>
          <div id="image">
            <img id="imagem1" src="./../assets/img/nothing.png"></img>
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

        <section id="galeria">
          <div id="galeria-imagens">

          </div>
        </section>


      </body>
    </div>
  );
}

export default LandingPage;
