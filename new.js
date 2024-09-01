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
      const name = product.name.length == 15 ? product.name : product.name + "...";
      output += `
        <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>

         <span class="discountPercentage">${product.discount_percentage}</span>

         <img src="${product.image_link}" alt="${name}">

         <div class="card-body">

            <p class="productBrand" style="text-transform: uppercase;font-weight: bold;margin-top:-15px;">${product.brand}</p>

            <p id="productName" class="productName text-primary font-monospace fs-6" style="margin-top:-15px">${product.name}</p>

           <div class="price" style="margin-top: -20px;">
            <span class="productPrice fs-6 text-secondary me-2 fs-4">$. ${product.price}</span>

            <span class="actualPrice fs-6 text-danger text-decoration-line-through"> $.${product.actual_price}</span>

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
      output += `
      <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">30% OFF</span>
         <img src="${product.image_link}" alt="${product.name} ">
         <div class="card-body">

            <p class="productBrand" style="text-transform: uppercase;font-weight: bold;margin-top:-10px;">${product.brand} </p>

            <p id="productName" class="productName text-primary font-monospace fs-6" style="margin-top:-15px">
               ${product.name}
            </p>

            <div class="price" style="margin-top: -20px;">
               <span class="productPrice fs-4 text-secondary me-2 fs-4">$.${product.price}</span>

               <span class="actualPrice fs-5 text-danger text-decoration-line-through">$. 25.00</span>
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
      output += `
        <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">35% OFF</span>
         <img src="${product.image_link}" alt="${product.name}">
         <div class="card-body">
            <p class="productBrand" style="text-transform: uppercase;font-weight: bold;margin-top:-15px;">${product.brand}</p>

            <p id="productName" class="productName text-primary font-monospace fs-6" style="margin-top:-15px">${product.name}</p>

           <div class="price" style="margin-top: -20px;">
            <span class="productPrice fs-4 text-secondary me-2 fs-4">$. ${product.price}</span>
            <span class="actualPrice fs-5 text-danger text-decoration-line-through"> $. 15.0</span>
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












