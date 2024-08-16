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
      output += `
        <div class="card">
        <i class="favHeart fa-regular fa-heart " data-id="${product.id}"></i>
         <span class="discountPercentage">${product.discount_percentage}</span>
         <img src="${product.image_link}" alt="${product.name}">
         <div class="card-body">
            <p class="productBrand" style="text-transform: uppercase;font-weight: bold;margin-top:-15px;">${product.brand}</p>

            <p id="productName" class="productName text-primary font-monospace fs-6" style="margin-top:-15px">${product.name}</p>

           <div class="price" style="margin-top: -20px;">
            <span class="productPrice fs-4 text-secondary me-2 fs-4">$. ${product.price}</span>
            
            <span class="actualPrice fs-5 text-danger text-decoration-line-through"> $.${product.actual_price}</span>
           </div>

         </div>
         <div class="btns" style="margin-top:-10px;">
            <button>Buy now</button>
            <button>Add to cart</button>
         </div>
      </div>`;
   });
   productContainer.innerHTML = output;

}
fetchBlushdata();

// add to Favourite
const favHearts = document.querySelectorAll(".favHeart");

favHearts.forEach((heart) => {
   heart.addEventListener("click", () => {
      heart.classList.toggle("added");
   });
});

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
         <img src="${product.api_featured_image}" alt="${product.name} ">
         <div class="card-body">

            <p class="productBrand" style="text-transform: uppercase;font-weight: bold;margin-top:-10px;">${product.brand} </p>

            <p id="productName" class="productName text-primary font-monospace fs-6" style="margin-top:-15px">
               ${product.name}
            </p>

            <div class="price" style="margin-top: -20px;">
               <span class="productPrice fs-4 text-secondary me-2 fs-4">$.${product.price}</span>

               <span class="actualPrice fs-5 text-danger text-decoration-line-through">$. 25.00</span>
            </div>

         </div>
         <div class="btns" style="margin-top:-10px;">
            <button>Buy now</button>
            <button>Add to cart</button>
         </div>
      </div>`
   });
   bronzerCards.innerHTML = output;

   const favHearts = document.querySelectorAll(".favHeart");

   favHearts.forEach((heart) => {
      heart.addEventListener("click", (e) => {
         heart.classList.toggle("added");
         console.log(e.target.dataset.id);
      });
   });
}
bronzerCardsData();















