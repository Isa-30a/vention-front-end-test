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

addCards(tempFlowers, layout);

function addCards(flowersList, container){

    for (let index = 0; index < flowersList.length; index++) {
        const currentFlower = flowersList[index];
        
        const newDiv = createCardElement();
    
        const img = addImgToanElement(currentFlower.img);
        
        const newHr = document.createElement("hr");
        
        const newInfo = createFlowerInfo(currentFlower);

        container.appendChild(newDiv)
        newDiv.appendChild(img);
        newDiv.appendChild(newHr);
        newDiv.appendChild(newInfo);
    }
}

function createFlowerInfo(currentFlower) {
    const newInfo = document.createElement("div");
    newInfo.setAttribute("class", "info");

    const name = document.createElement("p");
    name.textContent = currentFlower.name;
    const price = document.createElement("p");
    price.textContent ="$ "+ currentFlower.price;
    const stars = document.createElement("div");

    newInfo.appendChild(name);
    newInfo.appendChild(price);
    newInfo.appendChild(stars);
    createStars(currentFlower, stars);
    return newInfo;
}

function createStars(flower, starsElement) {
    for (let star = 1; star < flower.stars; star++) {
        const element = flower;
        const newStar = document.createElement("img");
        newStar.setAttribute("src", "./assets/star.svg");
        newStar.setAttribute("class", "star");
        starsElement.appendChild(newStar);
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