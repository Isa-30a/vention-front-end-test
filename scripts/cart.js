const cardListImg=["assets/blue-flower.png","assets/orange-flower.png", "assets/pink-flower.png"];
const tempFlowers = [
    {
        img: cardListImg[0],
        name: "Blue Flower",
        price: "80.00",
        stars:4
    },
    {
        img: cardListImg[1],
        name: "Orange Flower",
        price: "17.60",
        stars:3
    },
    {
        img: cardListImg[2],
        name: "Pink Flower",
        price: "40.00",
        stars:5
    }
]
const layout = document.querySelector(".layout");

addCards(cardListImg, layout);

function addCards(cardListImg, container){

    for (let index = 0; index < cardListImg.length; index++) {
        const imgSrc = cardListImg[index];

        const newDiv = createCardElement();
        
        container.appendChild(newDiv)
        
        const img = addImgToanElement(imgSrc);
        newDiv.appendChild(img);
    }
}

function createCardElement() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    return newDiv;
}

function addImgToanElement(src){
    
    const img = document.createElement("img");
        
    img.setAttribute("src",src);
    return img;
}