const cardListImg=["assets/blue-flower.png","assets/orange-flower.png", "assets/pink-flower.png"];

const layout = document.querySelector(".layout");

const img = document.querySelector("img");

addCards(cardListImg, layout);

function addCards(cardListImg, container){

    for (let index = 0; index < cardListImg.length; index++) {
        const imgSrc = cardListImg[index];
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card");

        container.appendChild(newDiv)
        const img = document.createElement("img");
        
        img.setAttribute("src",imgSrc);
        newDiv.appendChild(img);
    }
   
}