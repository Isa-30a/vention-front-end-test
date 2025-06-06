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
addCards();

function addItemToCart(item) {
  cart.add(item);
}
function removeItemFromCart(item) {
  cart.delete(item);
}

async function addCards() {
  const tempFlowers = await getflowers();
  const cardTemplate = document.querySelector("#card-template").content;

  const cardList = document.querySelector("#card-list");

  for (let index = 0; index < tempFlowers.length; index++) {
    const element = tempFlowers[index];
    const cardClone = cardTemplate.cloneNode(true);

    cardClone.querySelector(".flower-img").src = element.img;
    cardClone.querySelector(".flower-name").textContent = element.name;
    cardClone.querySelector(".price").textContent = "$" + element.price;

    const notifierClone = cardClone.querySelector(".in-cart-notifier");
    notifierClone.style.display = "none";

    const addButton = cardClone.querySelector(".add-btn");
    const removeButton = cardClone.querySelector(".remove-btn");

    const imgcontainer = document.createElement("div");
    imgcontainer.className = "img-container";

    removeButton.addEventListener("click", () => {
      removeItemFromCart(element);
      notifierClone.style.display = "none";
      addButton.style.display = "flex";
      removeButton.style.display = "none";
    });

    addButton.addEventListener("click", () => {
      addItemToCart(element);
      notifierClone.style.display = "flex";
      addButton.style.display = "none";
      removeButton.style.display = "flex";
    });

    const starList = cardClone.querySelector(".star-ul");
    const starTemplate = document.querySelector("#star-template").content;
    const starTemplateGray = document.querySelector(
      "#star-template-gray"
    ).content;

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("li");
      star.style.display = "inline-block";

      if (element.stars <= i) {
        starList.appendChild(starTemplateGray.cloneNode(true));
      } else {
        starList.appendChild(starTemplate.cloneNode(true));
      }
      starList.appendChild(star);
    }

    cardList.appendChild(cardClone);
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
