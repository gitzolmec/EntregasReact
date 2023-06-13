const Products = [
  {
    id: 1,
    nombre: "Animal Crossing",
    categoria: "juegosSwitch",
    precio: 36000,
    img: "src/assets/img/animalCrossing.jpeg",
    stock: 20,
    Descripcion:
      "Si ya no puedes más con el ajetreo de la ciudad, Tom Nook se ha sacado un negocio redondo de debajo de la manga y te tiene preparada una sorpresa que te encantará:¡el Plan de Asentamiento en Islas Desiertas de Nook Inc",
  },
  {
    id: 2,
    nombre: "Ark Evolve",
    categoria: "juegosSwitch",
    precio: 25990,
    img: "src/assets/img/arkEvolve.jpg",
    stock: 20,
    Descripcion:
      "Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas.",
  },
  {
    id: 3,
    nombre: "Mario Party Super Stars",
    categoria: "juegosSwitch",
    precio: 47000,
    img: "src/assets/img/supermarioparty.jpg",
    stock: 20,
    Descripcion:
      "¡Es hora de montar una fiesta irrepetible! Disfruta de 5 tableros clásicos de Nintendo 64 y de 100 minijuegos de distintas entregas de la serie en Mario Party Superstars para Nintendo Switch. Una colección estelar de tableros clásicos de Nintendo 64",
  },
  {
    id: 4,
    nombre: "Crash Bandicoot Trilogy",
    categoria: "juegosSwitch",
    precio: 42000,
    img: "src/assets/img/crash.png",
    stock: 20,
    Descripcion:
      "Tu marsupial favorito, Crash Bandicoot®, está de vuelta, mejorado, más alocado y con ganas de que empiece el baile! Disfruta con la colección de juegos N. Sane Trilogy en tu Nintendo Switch! ",
  },
  {
    id: 5,
    nombre: "Bayonetta",
    categoria: "juegosSwitch",
    precio: 25000,
    img: "src/assets/img/bayonetta.png",
    stock: 20,
    Descripcion:
      "Bayonetta es una bruja Umbra moderna y asquerosa que, después de estar dormida en el fondo de un lago durante 500 años, se despierta sin memoria de quién es realmente. Como Bayonetta, castiga a los implacables ejércitos de ángeles que vienen tras ti con dispositivos mortales, evade e hipnotiza con el tiempo de la bruja, y utiliza Wicked Weaves para convocar a los demonios infernales para enviarlos de vuelta a su creador",
  },
  {
    id: 6,
    nombre: "Asassins Creed 3",
    categoria: "juegosSwitch",
    precio: 35000,
    img: "src/assets/img/assassins creed 3.jpg",
    stock: 20,
    Descripcion:
      "En 1775 las colonias americanas están al borde de la revolución. Juega como Connor y logra la libertad de tu pueblo. Viaja por ciudades bulliciosas y campos de batalla, y asesina a tus enemigos con un arsenal de armas letales.",
  },
  {
    id: 7,
    nombre: "Crash Bandicoot 4",
    categoria: "juegosSwitch",
    precio: 40000,
    img: "src/assets/img/crash 4.jpg",
    stock: 20,
    Descripcion:
      "Neo Cortex y N. Tropy han vuelto a las andadas y esta vez no planean darle la tabarra al universo, ¡su objetivo es el multiverso entero! Crash y Coco tendrán que reunir cuatro máscaras cuánticas y trastocar las leyes de la realidad para salvar el mundo.",
  },
  {
    id: 8,
    nombre: "DMC 5 Special Edition",
    categoria: "juegosPS5",
    precio: 25000,
    img: "src/assets/img/Devil May Cry 5.jpeg",
    stock: 20,
    Descripcion:
      "Han pasado varios años en Devil May Cry 5 y la amenaza del poder demoníaco, desde hace mucho tiempo olvidado, ha vuelto a amenazar al mundo una vez más. La demoníaca invasión comienza con las semillas de un ''árbol demoníaco'' que está echando sus raíces en Red Grave City. Esta incursión infernal atrae la atención del joven cazador Nero, un aliado de Dante que ahora se encuentra sin su brazo demoníaco la fuente de gran parte de su poder.",
  },
  {
    id: 9,
    nombre: "Elden Ring",
    categoria: "juegosPS5",
    precio: 54000,
    img: "src/assets/img/eldenRing.jpg",
    stock: 20,
    Descripcion:
      "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
  },
  {
    id: 10,
    nombre: "Hogwarts Legacy",
    categoria: "juegosPS5",
    precio: 54000,
    img: "src/assets/img/hogwartslegacy.jpg",
    stock: 20,
    Descripcion:
      "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico de Harry Potter.",
  },
  {
    id: 11,
    nombre: "Horizon Forbidden West",
    categoria: "juegosPS5",
    precio: 48000,
    img: "src/assets/img/horizon.jpg",
    stock: 20,
    Descripcion:
      "Vive la misión legendaria de Aloy para desvelar los secretos de una futura Tierra dominada por máquinas. ¡Usa devastadores ataques contra tus depredadores y explora un majestuoso mundo abierto en este galardonado RPG de acción!",
  },
  {
    id: 12,
    nombre: "Call of Duty MW II",
    categoria: "juegosPS5",
    precio: 35000,
    img: "src/assets/img/callofdutymw3.jpg",
    stock: 20,
    Descripcion:
      "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products.filter((prod) => prod.categoria === categoria));
    }, 500);
  });
};
