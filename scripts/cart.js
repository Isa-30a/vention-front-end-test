const cardListImg = [
  "assets/blue-flower.png",
  "assets/orange-flower.png",
  "assets/pink-flower.png",
];
async function getflowers() {
  return [
    {
      img: cardListImg[0],
      name: "Blue Flower",
      price: "80.00",
      stars: 4,
    },
    {
      img: cardListImg[1],
      name: "Orange Flower",
      price: "17.60",
      stars: 3,
    },
    {
      img: cardListImg[2],
      name: "Pink Flower",
      price: "40.00",
      stars: 5,
    },
  ];
}

const layout = document.querySelector(".layout");
const cart = new Set();
addCards(layout);

function addItemToCart(item) {
  cart.add(item);
}
function removeItemToCart(item) {
  cart.add(item);
}

async function addCards(container) {
  const tempFlowers = await getflowers();
  const notifier = document.createElement("div");
  notifier.className = "in-cart-notifier";
  notifier.textContent = "In cart";

  for (let index = 0; index < tempFlowers.length; index++) {
    const currentFlower = tempFlowers[index];

    const newDiv = createCardElement();

    const imgcontainer = document.createElement("div");
    imgcontainer.className = "img-container";

    const img = addImgToanElement(currentFlower.img);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to cart";
    addButton.className = "cart-button";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove from cart";
    removeButton.className = "cart-button";
    
    imgcontainer.appendChild(img);

    imgcontainer.appendChild(addButton);
    const notifierClone = notifier.cloneNode(true);
    removeButton.addEventListener("click", () => {
      removeItemToCart(currentFlower);
      if (cart.has(currentFlower)) {
        imgcontainer.removeChild(removeButton);
        imgcontainer.appendChild(addButton);
        addButton.style.visibility = "visible";
        imgcontainer.removeChild(notifierClone);
      }
    });

    addButton.addEventListener("click", () => {
      addItemToCart(currentFlower);
      if (cart.has(currentFlower)) {
        imgcontainer.removeChild(addButton);
        imgcontainer.appendChild(removeButton);
        addButton.style.visibility = "hidden";
        imgcontainer.appendChild(notifierClone);
      }
    });

    const newHr = document.createElement("hr");

    const newInfo = createFlowerInfo(currentFlower);

    newDiv.appendChild(imgcontainer);
    newDiv.appendChild(newHr);
    newDiv.appendChild(newInfo);
    container.appendChild(newDiv);
  }
}

function createFlowerInfo(currentFlower) {
  const newInfo = document.createElement("div");
  newInfo.setAttribute("class", "info");

  const name = document.createElement("p");
  name.textContent = currentFlower.name;
  name.className = "name";
  const price = document.createElement("p");
  price.textContent = "$ " + currentFlower.price;
  price.className = "price";
  const stars = document.createElement("div");

  newInfo.appendChild(name);
  newInfo.appendChild(price);
  newInfo.appendChild(stars);
  createStars(currentFlower, stars);
  return newInfo;
}

function createStars(flower, starsElement) {
  const newStar = document.createElement("div");
  newStar.setAttribute("style", "display:flex; justify-content:center");
  const svg = `<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <polygon id="star" points="6.91773333 6.1328 10 3.75 6.25 3.75 5 0 3.75 3.75 0 3.75 3.086 6.12293333 1.87493333 10 5.00466667 7.6 8.1276 10"></polygon>
</svg>
`;
  for (let i = 0; i < 5; i++) {
    const element = flower;
    const star = document.createElement("div");
    star.innerHTML = svg;
    newStar.appendChild(star);

    if (flower.stars <= i) {
      star.setAttribute("class", "star-gray");
    } else {
      star.setAttribute("class", "star");
    }
    newStar.setAttribute("src", "./assets/star.svg");
    starsElement.appendChild(newStar);
  }
}

function createCardElement() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card");
  return newDiv;
}

function addImgToanElement(src) {
  const img = document.createElement("img");

  img.setAttribute("src", src);
  return img;
}
