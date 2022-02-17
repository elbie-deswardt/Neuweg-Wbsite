// Two custom html template elements were created for the navbar at the top of the page as well as the footer at the bottom.
// These elements appear on all site pages and can be updated singularly from here.


class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <!-- My CSS -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="brand-logo" src="images/Neuweg_Logo.PNG"
                    alt="Neuweg Logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" lang-key="home" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="products.html" id="navbarDropdownProductMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false" lang-key="products">
                            Products
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownProductMenuLink">
                            <a class="dropdown-item product-section" lang-key="urology" href="products.html">Urology</a>
                            <a class="dropdown-item product-section" lang-key="orthopedics"
                                href="products.html">Orthopedics</a>
                            <a class="dropdown-item product-section" lang-key="laparoscopy"
                                href="products.html">Laparoscopy</a>
                            <a class="dropdown-item product-section" lang-key="gynecology"
                                href="products.html">Gynecology</a>
                            <a class="dropdown-item product-section" lang-key="ear_nose_throat"
                                href="products.html">Ear-Nose-Throat</a>
                            <a class="dropdown-item product-section" lang-key="light_sources" href="products.html">Light
                                Sources</a>
                            <a class="dropdown-item product-section" lang-key="sterilization"
                                href="products.html">Sterilization</a>
                            <a class="dropdown-item product-section" lang-key="demonstration"
                                href="products.html">Demonstration</a>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <a class="dropdown-item product-section" lang-key="all_products" href="products.html">All
                                products</a>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" lang-key="about" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" lang-key="contact" href="contact.html">Contact Us</a>
                    </li>
                </ul>
                <form class="d-flex" id="nav-bar-search">
                    <input class="form-control me-2" id="search-input" href="products.html" type="search"
                        placeholder="Search" aria-label="Search">
                </form>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown me-auto">
                        <a class="nav-link dropdown-toggle me-auto" href="#" id="navbarLanguageDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="translate-icon"><i class="fas fa-globe-americas fa-2x"></i></span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarLanguageDropdownMenuLink">
                            <li><a class="dropdown-item language-item" data-lang="en" href="#">English</a></li>
                            <li><a class="dropdown-item language-item" data-lang="de" href="#">Deutch</a></li>
                            <!-- <li><a class="dropdown-item language-item" data-lang="fr" href="#">français</a></li> -->
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  `;
  }
}

customElements.define("my-navbar", MyNavbar);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <!-- My CSS -->
    <link rel="stylesheet" href="css/style.css" />
    
    <div id="footer">
      <div class="row">
        <div class="col footer-col">
          <div class="row">
            <div class="col-2"><i class="icon fas fa-map-marker-alt"></i></div>
            <div class="col-10">
              NEUWEG GmbH c/o Acconsis GmbH Schloßschmidstr. 5 D-80639 Munich
            </div>
          </div>
        </div>
        <div class="col footer-col">
          <i class="icon fas fa-phone-alt"></i>+49 (89) 54714 - 3<br />
          <i class="icon fas fa-fax"></i>+49 (89) 54714 - 5964<br />
          <i class="icon far fa-envelope"></i>info@neuwegmed.de
        </div>
        <div class="col top-col footer-col">
          <i class="fas fa-chevron-up fa-4x" id="top-arrow" href="#"></i><br />
          <span class="top-arrow-text" lang-key="back_to_top">Back to the top</span><br />
          <span class="copyright-text">© 2023 <span lang-key="by">by</span> Neuweg Med</span>
        </div>
        <div class="col footer-col" id="socials">
          <span lang-key="follow_us">Follow us on</span><br />
          <i class="socials-icon icon fab fa-twitter fa-2x"></i>
          <i class="socials-icon icon fab fa-linkedin-in fa-2x"></i>
        </div>
        <div class="col footer-col"></div>
      </div>
    </div>
    `;
  }
}

customElements.define("my-footer", MyFooter);

// When a user selects to view a product section , the selection is stored prior to navigation.
$(".product-section").click(function () {
  let productSection = $(this).attr('lang-key');
  sessionStorage.setItem("productSection", productSection);
});

$(".language-item").click(function () {
  //Get the language selected
  let language = $(this).attr('data-lang');
  // Store the current language setting as the previous language setting
  sessionStorage.setItem("prevLanguage", sessionStorage.getItem("language"));
  // Store the new language setting as the current language setting
  sessionStorage.setItem("language", language);
  // Reload the page to update the language settings
  document.location.reload(true);
});


// Script for search bar functionality
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
  window.location.pathname  = "Neuweg-Website/products.html";
});
