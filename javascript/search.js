const searchBar = document.getElementById("nav-bar-search");
const searchInput = document.getElementById("search-input");

// This listens for a searchbar submit or "Enter".
searchBar.addEventListener("submit", (e) => {
  // We prevent the default navigation to allow for our specified one.
  e.preventDefault();
  // Get and store the search value for retrieval from the product page.
  const search = searchInput.value;
  sessionStorage.setItem("search", search);
  sessionStorage.setItem("userSearch", true);
  // Update the product section to ensure a search is done across all products and not only sections.
  sessionStorage.setItem("productSection", "all_products");
  // Navigate to the product page.
  window.location.pathname = "products.html";
});
