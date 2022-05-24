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