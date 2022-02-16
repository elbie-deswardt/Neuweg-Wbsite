// This is the search filter functionallity that is run once a user submits a search query.
// A list of all products is filtered by adding a "hide" class which changes the cards display to none.


// This needs to be executed after the page has been translated to allow for a language spesific search.
document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem("userSearch") == "true") {

        // Get the searchword 
        let searchTerm = sessionStorage.getItem("search");

        // Get all products as displayed on an "All Products" selections.
        let allProducts = document.querySelectorAll(".card-product-list");

        let matches = [];

        // For each product displayed, see if the search matches the product heading or subtext.
        allProducts.forEach((product) => {

            let productHeading = product.querySelector(".card-title").textContent;
            let productDescription = product.querySelector(".card-text").textContent;
            let isVisible = productHeading.toLowerCase().includes(searchTerm.toLowerCase()) || productDescription.toLowerCase().includes(searchTerm.toLowerCase());

            // Hide products that don't match by adding the hide class.
            product.classList.toggle("hide", !isVisible);

            // Add matches to list to check whether there's at least one
            if (isVisible) {
                matches.push(productHeading);
            }
        })
        // Reset search session when done
        sessionStorage.setItem("userSearch", false);

        console.log(matches);
        if (matches.length === 0) {
            $(
                `<h3 class="no-results" lang-key="no_results">No results found.</h3>`
            ).insertAfter(".product-section-header");
        }
    }
}, false);


