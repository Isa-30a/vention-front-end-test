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
      imgcontainer.appendChild(removeButton);
      notifierClone.style.display = "flex";
      addButton.style.display = "none";
      removeButton.style.display = "flex";
    });

    const starList = cardClone.querySelector(".star-ul");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("li");
      star.style.display = "inline-block";

      if (element.stars <= i) {
        star.setAttribute("class", "star-gray");
      } else {
        star.setAttribute("class", "star");
      }
      starList.appendChild(star);
    }

    cardList.appendChild(cardClone);
  }

  // const tempFlowers = await getflowers();
  // const notifier = document.createElement("div");
  // notifier.className = "in-cart-notifier";
  // notifier.textContent = "In cart";

  // for (let index = 0; index < tempFlowers.length; index++) {
  //   const currentFlower = tempFlowers[index];

  //   const newDiv = createCardElement();

  //   const imgcontainer = document.createElement("div");
  //   imgcontainer.className = "img-container";

  //   const img = addImgToanElement(currentFlower.img);

  //   const addButton = document.createElement("button");
  //   addButton.textContent = "Add to cart";
  //   addButton.className = "cart-button";

  //   const removeButton = document.createElement("button");
  //   removeButton.textContent = "Remove from cart";
  //   removeButton.className = "cart-button";

  //   imgcontainer.appendChild(img);

  //   imgcontainer.appendChild(addButton);
  //   const notifierClone = notifier.cloneNode(true);

  //   imgcontainer.appendChild(notifierClone);
  //   notifierClone.style.display = "none";

  //   removeButton.addEventListener("click", () => {
  //     removeItemFromCart(currentFlower);
  //     notifierClone.style.display = "none";
  //     addButton.style.display = "flex";
  //     removeButton.style.display = "none";
  //   });

  //   addButton.addEventListener("click", () => {
  //     addItemToCart(currentFlower);
  //     imgcontainer.appendChild(removeButton);
  //     notifierClone.style.display = "flex";
  //     addButton.style.display = "none";
  //     removeButton.style.display = "flex";
  //   });

  //   const newHr = document.createElement("hr");

  //   const newInfo = createFlowerInfo(currentFlower);

  //   newDiv.appendChild(imgcontainer);
  //   newDiv.appendChild(newHr);
  //   newDiv.appendChild(newInfo);
  //   container.appendChild(newDiv);
  // }
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

function createStars(flower, template) {
  // const starList = template.querySelector("#star-template");

  // const newStar = document.createElement("div");

  // for (let i = 0; i < 5; i++) {
  //   const star = document.createElement("li");
  //   star.style.display = "inline-block";

  //   if (flower.stars <= i) {
  //     star.setAttribute("class", "star-gray");
  //   } else {
  //     star.setAttribute("class", "star");
  //   }
  //   newStar.appendChild(star);
  // }
  // return newStar;
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
