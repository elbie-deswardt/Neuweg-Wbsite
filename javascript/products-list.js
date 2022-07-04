// This section contains all the code contained within the display of individual products.

import {
  products
} from "./product-content.js";
import {
  langdata
} from "./translation-content.js"

//This script loads the title of the section the user clicked on from the query parameter set prior to navigation
let productSection = window.location.search.substring(1);

// Render section heading with correct dataKey and title based on the user's selection.
$(
  `<h1 class="product-section-header" lang-key=${productSection}>${langdata.languages["en"][productSection]}</h1>`
).prependTo("#product-list");

// THIS SECTION DYNAMICALLY RENDERS ALL LOADED SECTION CONTENT

let sectionsToDisplay = [];
// Add to the list all product sections to display 
if (productSection == "all_products") {
  // Get all product sections
  sectionsToDisplay = Object.keys(products);
} else {
  // Only get items of the product division requested
  sectionsToDisplay = [productSection];
}

// Change the innerHTML for dynamic renedering
//Loop through each product within the listed product sections
document.getElementById("product-grid").innerHTML = `


${sectionsToDisplay
    .map(function (section) {
      return products[section]
        .map(function (product) {
          return ` 
  <div class="card card-product-list">
      <div class="row">
        <div class="col-8">
          <h4 class="card-title" lang-key="${product.name
              .toLowerCase()
              .replace(/[^A-Za-z0-9]/g, "_")}">${product.name}</h4>
        </div>
        <div class="col-4">
          <a
            target="_blank"
            href="Neuweg Catalogue v3.10.pdf#page=${product.page}"
            class="btn btn-secondary product-card-btn"
            lang-key="read_more"
            >Read More</a
          >
        </div>
      </div>
      <div class="row">
      <p class="card-text" lang-key="product_description">${product.subText
            }</p>
      </div>
      <div class="row">
        <img
          src= ${product.image}
          class="card-img-top product-card-img"
          alt="Cystoscope"
        />
      </div>
      </div> 
       `;
        })
        .join("");
    })
    .join("")}

`;

// Map executes a function for each element in the list.
// .join("") to remove comma seperators.