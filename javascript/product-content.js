// This module contains information about all product available products.
// Information contained includes:
// - The section in which the product resides.
// - A short description about the product category
// - A default image to represent the product category.
// - The catalogue page to which to link for more information on specific products within the category.

const products = {
  urology: [{
      name: "Cystoscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Cystoscopes.png",
      page: 8,
    },
    {
      name: "Nephroscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Nephroscopes.png",
      page: 10,
    },
    {
      name: "Uretero-Renoscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Uretero-Renoscopes.png",
      page: 12,
    },
    {
      name: "UMP",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/UMP.png",
      page: 14,
    },
    {
      name: "Forceps",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Forceps.png",
      page: 16,
    },
    {
      name: "Resectoscopy",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Resectoscopy.png",
      page: 18,
    },
    {
      name: "Cystoscopy",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Cystoscopy.png",
      page: 22,
    },
    {
      name: "Urethrotomy",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Urethrotomy.png",
      page: 27,
    },
    {
      name: "Spare Parts",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Spare_Parts.png",
      page: 31,
    },
  ],

  orthopedics: [{
      name: "Arthroscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Arthroscopes.png",
      page: 34,
    },
    // {
    //   name: "New Product 1",
    //   subText: "Lorem ipsum dolor sit amet.",
    //   image: "images/Cystoscope.png",
    //   page: 36,
    // },
    // {
    //   name: "New Product 2",
    //   subText: "Lorem ipsum dolor sit amet.",
    //   image: "images/Cystoscope.png",
    //   page: 38,
    // },
  ],

  laparoscopy: [{
    name: "Laparoscopes",
    subText: "Lorem ipsum dolor sit amet.",
    image: "images/Laparoscopes.png",
    page: 36,
  }, ],

  gynecology: [{
      name: "Hysteroscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Cystoscopes.png",
      page: 38,
    },
    {
      name: "Laparoscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Laparoscopes.png",
      page: 39,
    },
    {
      name: "Operating Sheaths",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Operating_Sheaths.png",
      page: 40,
    },
  ],

  ear_nose_throat: [{
      name: "Sinuscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Arthroscopes.png",
      page: 44,
    },
    {
      name: "Naso-Pharyngoscopes",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Naso-Pharyngoscopes.png",
      page: 45,
    },
  ],

  light_sources: [{
      name: "Light Guides",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Light_Guides.png",
      page: 48,
    },
    {
      name: "Adapters",
      subText: "Lorem ipsum dolor sit amet.",
      image: "images/Adapters.png",
      page: 49,
    },
  ],

  sterilization: [{
    name: "Cleaning, Disinfection and Sterilization",
    subText: "Lorem ipsum dolor sit amet.",
    image: "images/Steril_Case.png",
    page: 52,
  }, ],

  demonstration: [{
    name: "Demonstration Cases",
    subText: "Lorem ipsum dolor sit amet.",
    image: "images/Demonstration_Case.png",
    page: 56,
  }, ],
};

export {
  products
};