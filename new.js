// navbar styling function
const barOne = document.getElementById("barOne");
const barTwo = document.getElementById("barTwo");
const barThree = document.getElementById("barThree");
const navContainer = document.getElementById("navContainer");
const ul = document.getElementById("ul");

navContainer.addEventListener("click", function () {
   barOne.classList.toggle("one");
   barTwo.classList.toggle("two");
   barThree.classList.toggle("three");
   ul.classList.toggle("active");
});


// blusher details adding function
const productContainer = document.querySelector("#productContainer");

async function fetchBlushdata() {
   const res = await fetch("Blush.json");
   const data = await res.json();
   let output = "";
   data.forEach((product) => {
      const maxLength = 15;
      let name = product.name;
      let brand = product.brand;
      if (name.length > maxLength || brand.length > maxLength) {
         name = name.substring(0, maxLength) + '...';
         brand = brand.substring(0, maxLength) + '...';
      }

      output += `
      <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">${product.discount_percentage}</span>
         
         <div class="imgContainer">
            <img src="${product.image_link}" alt="${product.name}">
         </div>

         <div class="card-body">
            <p class="productBrand">${brand}</p>
            <p id="productName" class="productName">${name}</p>

           <div class="price">
            <span class="productPrice">$. ${product.price}</span>
            <span class="actualPrice"> $.${product.actual_price}</span>
           </div>
           <div class="reviews">
           <p class="rating">★★★★</p><span class="revi">(46 Reviews)</span>
           </div>

           <button class="cartBtn">Add to cart</button>
         </div>
      </div>`;
   });
   productContainer.innerHTML = output;
}
fetchBlushdata();



// bronzer details adding function
const bronzerCards = document.querySelector("#bronzerCards");
async function bronzerCardsData() {
   const res = await fetch("Bronzer.json");
   const data = await res.json();
   let output = "";
   data.forEach((product) => {
      const maxLength = 15;
      let name = product.name;
      if (name.length > maxLength) {
         name = name.substring(0, maxLength) + '...';
      }

      output += `
      <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">30% OFF</span>
         <div class="imgContainer">
            <img src="${product.image_link}" alt="${product.name} ">
         </div>
         <div class="card-body">

            <p class="productBrand">${product.brand}</p>
            <p id="productName" class="productName">${name}</p>

            <div class="price">
               <span class="productPrice">$.${product.price}</span>
               <span class="actualPrice">$.25.00</span>
            </div>
            <div class="reviews">
           <p class="rating">★★★★</p><span class="revi">(46 Reviews)</span>
           </div>

            <button class="cartBtn">Add to cart</button>
         </div>
      </div>`
   });
   bronzerCards.innerHTML = output;
}
bronzerCardsData();


// eyeliner details adding function
const eyelinerContainer = document.querySelector("#eyelinerContainer");
async function eyelinerFetch() {
   const res = await fetch("Eyeliner.json");
   const data = await res.json();
   let output = "";
   data.forEach((product) => {
      const maxLength = 15;
      let name = product.name;
      if (name.length > maxLength) {
         name = name.substring(0, maxLength) + '...';
      }
      output += `
        <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">35% OFF</span>

          <div class="imgContainer">
            <img src="${product.image_link}" alt="${product.name}">
         </div>
         
         <div class="card-body">
            <p class="productBrand">${product.brand}</p>
            <p id="productName" class="productName">${name}</p>

           <div class="price">
            <span class="productPrice">$.${product.price}</span>
            <span class="actualPrice">$.15.00</span>
           </div>
           <div class="reviews">
           <p class="rating">★★★★</p><span class="revi">(46 Reviews)</span>
           </div>

           <button class="cartBtn">Add to cart</button>
         </div>
      </div>`;
   });
   eyelinerContainer.innerHTML = output;

   // add to Favourite
   const favHearts = document.querySelectorAll(".favHeart");

   favHearts.forEach((heart) => {
      heart.addEventListener("click", (e) => {
         heart.classList.toggle("added");
         console.log(e.target.dataset.id);
      });
   });

   // Add to cart button function
   const cartBtn = document.querySelectorAll(".cartBtn");

   cartBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
      });
   });
}
eyelinerFetch();












