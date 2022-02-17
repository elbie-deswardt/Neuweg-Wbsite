import { langdata } from "./translation-content.js";

// Triggers page translation once entire document is loaded.
document.addEventListener("DOMContentLoaded", () => {

  // If it is the first time the user logs on to the site, the default language is set to their location.
  if (sessionStorage.getItem("language") == null) {
    
    // Default language
    let language = "en";
    // Get local language from web browser. If it contains 'de' set language to German, else keep it English.
    let lang = navigator.language; //from browser
    let localeLanguage = Intl.getCanonicalLocales(lang); //from browser validated

    // Change language if the local language contains "de" for German.
    if (localeLanguage.includes("de")) {
      language = "de";
    }

    // Save the language selection.
    sessionStorage.setItem("language", language);
  }

  // Custom css styling of German web version.
  if ((sessionStorage.getItem("language") == "de") && (window.location.pathname == "/Neuweg-Website/" || window.location.pathname == "/Neuweg-Website/index.html" )) {
    $('h4:contains("Ear-Nose-Throat")').css("font-size", "1.2rem");
  }
  

  // Custom css styling of German web version.
  if ((sessionStorage.getItem("language") == "de") && window.location.pathname == "/Neuweg-Website/products.html" && sessionStorage.getItem("productSection") == "sterilization") {
    $('h4:contains("Cleaning, Disinfection and Sterilization")').css("font-size", "1.4rem");
  }

  // Get all elements with a lang-key attribute and update their text content based on their key.
  document.querySelectorAll(`[lang-key]`).forEach((element) => {
    let key = element.getAttribute("lang-key");
    if (key) {
      element.textContent =
        langdata.languages[sessionStorage.getItem("language")][key];
    }
  });
});
