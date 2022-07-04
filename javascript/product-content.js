// This module contains information about all product available products.
// Information contained includes:
// - The section in which the product resides.
// - A short description about the product category
// - A default image to represent the product category.
// - The catalogue page to which to link for more information on specific products within the category.

const products = {
  urology: [{
    name: "Cystoscopes",
    subText: "Storz compatibles diameter:2.9-4.0mm, 0° - 70° Direction of view, standard & wide angle, 302mm working length.",
    image: "images/Cystoscopes.png",
    page: 8,
  },
  {
    name: "Nephroscopes",
    subText: "Wide angle Storz compatibles diameter:13.5 & 19Fr, 6 & 10Fr working channels, 220mm & 320mm working lenghts, 8° Field of view includes bridge.",
    image: "images/Nephroscopes.png",
    page: 10,
  },
  {
    name: "Uretero-Renoscopes",
    subText: "Storz compatible including detachable bridge 6-7.5Fr & 7.5-10Fr diameters, various working channel configs, 310-425mm working length & 8° view.",
    image: "images/Uretero-Renoscopes.png",
    page: 12,
  },
  {
    name: "UMP",
    subText: "Consisting of Mini-Nephroscope, Sheath  - 11& 13Fr, Obturator & reprocessing basket set.",
    image: "images/UMP.png",
    page: 14,
  },
  {
    name: "Forceps",
    subText: "Including Grasping, Biopsy,Grasping & threefold grasper available in rigid & flexible.",
    image: "images/Forceps.png",
    page: 16,
  },
  {
    name: "Resectoscopy",
    subText: "Including Monopolar active & passive working element, HF Electrodes, high frequency cables & Sheaths. Storz compatible & 24Fr config.",
    image: "images/Resectoscopy.png",
    page: 18,
  },
  {
    name: "Cystoscopy",
    subText: "4mm Cystoscopy Sheaths with two fixed stopcocks & continous fow & blunt obturator available in 17 - 25Fr sizes.",
    image: "images/Cystoscopy.png",
    page: 22,
  },
  {
    name: "Urethrotomy",
    subText: "Passive Working element, Sheaths, Obturators & Straight & wave cut cold knife. Complete Otis sets.",
    image: "images/Urethrotomy.png",
    page: 27,
  },
  {
    name: "Spare Parts",
    subText: "",
    image: "images/Spare_Parts.png",
    page: 31,
  },
  ],

  orthopedics: [{
    name: "Arthroscopes",
    subText: "Wide Angle or Standard Storz compatible endoscopes in 2.7 & 4.0 mm, 0° - 70° direction of view & 110 - 175mm working lenghts",
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
    subText: "Wide Angle Storz Compatible laparoscopes in 5 & 10mm diameters, 0° -45° direction of view and 312 & 344mm working lenghts.",
    image: "images/Laparoscopes.png",
    page: 36,
  },],

  gynecology: [{
    name: "Hysteroscopes",
    subText: "Wide Angle or Standard Storz compatible Hysteroscopes in 2.9mm & 4mm diameters, 0° to 70° direction of view & 298-302mm working lenghts.",
    image: "images/Cystoscopes.png",
    page: 38,
  },
  {
    name: "Laparoscopes",
    subText: "Wide Angle Storz Compatible laparoscopes in 5 & 10mm diameters, 0° -45° direction of view and 312 & 344mm working lenghts.",
    image: "images/Laparoscopes.png",
    page: 39,
  },
  {
    name: "Operating Sheaths",
    subText: "Diagnostic Continous Flow inner sheaths for Hysteroscopes 2.7mm & 2.9mm.",
    image: "images/Operating_Sheaths.png",
    page: 40,
  },
  ],

  ear_nose_throat: [{
    name: "Sinuscopes",
    subText: "Standard or Wide angle Storz compatible Sinuscopes in 2.7 & 4mm diameters, 0° -70° Direction of view, 110, 175 & 187mm working lenghts.",
    image: "images/Arthroscopes.png",
    page: 44,
  },
  {
    name: "Naso-Pharyngoscopes",
    subText: "Nasopharyngoscope with light weight aluminium case leakage tester and light guide - 16K image, 3.2mm, 300mm working length 0°.",
    image: "images/Naso-Pharyngoscopes.png",
    page: 45,
  },
  ],

  light_sources: [{
    name: "Light Guides",
    subText: "Armoured & highly flexible light guides including adapters for your endoscope and light source.",
    image: "images/Light_Guides.png",
    page: 48,
  },
  {
    name: "Adapters",
    subText: "Armoured & highly flexible light guides including adapters for your endoscope and light source.",
    image: "images/Adapters.png",
    page: 49,
  },
  ],

  sterilization: [{
    name: "Cleaning, Disinfection and Sterilization",
    subText: "URS & Nephroscope baskets with lid and supports including silicon mat.",
    image: "images/Steril_Case.png",
    page: 52,
  },],

  demonstration: [{
    name: "Demonstration Cases",
    subText: "Rectangular or Square aliminium demonstration cases including customisable foam inserts according to your requirements.",
    image: "images/Demonstration_Case.png",
    page: 56,
  },],
};

export {
  products
};