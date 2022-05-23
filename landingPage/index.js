function mint() {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(function (response) {
        return response.json();
    })
    .then((json) => console.log(json));
    /*
    .then(function (json) {
        for(let item of json){
            
            let imageNFT = document.createElement("img");
            imageNFT.append(item.url);
            document.getElementById("image").appendChild(imageNFT);
        }
    })
    .then(function (err) {
        console.log(err);
    })*/
}