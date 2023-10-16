const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
{id:1,title: "ORIGINAL",price: 2000,colors: [{code:"black",img: "./assets/1Timb OG black.png",},{code: "gray",img:"./assets/1Timb OG gray.png"}]},

{id:2,title: "TRAVEL",price: 2500,colors: [{code:"brown",img: "./assets/2Timb hike Brown.png"}]},

{id:3,title: "FORMAL",price: 1800,colors: [{code:"brown",img: "./assets/3Timb buck brown.png"}]},

{id:4,title: "SPORT",price: 2200,colors: [{code:"brown",img: "./assets/4Timb Ultra.png"}]},

{id:5,title: "CASUAL",price: 950,colors: [{code:"gray",img: "./assets/5Timb walsh gray.png"}]}
]

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    chosenProduct = products[index]

    //change text of current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.Price;
    currentProductImg.src = chosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color,index) => {color.addEventListener("click", ()=>{
    currentProductImg.src = chosenProduct.colors[index].img});
});
currentProductSizes.forEach((size, index)=>{size.addEventListener("click", ()=>{
  currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";});size.style.backgroundColor = "black";size.style.color = "white";});});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{payment.style.display = "flex";});

close.addEventListener("click", ()=>{payment.style.display="none";});