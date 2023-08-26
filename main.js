const nombreCompleto = "Pedro Fragoso Maldonado";

// metodos funcional

// while
// concat
// pop


const escuela = [
  {
    nombre: "Pedro",
    alumno: true,
    grado: "1",
    grupo: "A",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Mariana",
    alumno: false,
    grado: "1",
    grupo: "B",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Lizbeth",
    alumno: false,
    grado: "2",
    grupo: "C",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Milton",
    alumno: true,
    grado: "2",
    grupo: "B",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Gabriela",
    alumno: true,
    grado: "6",
    grupo: "A",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Ulises",
    alumno: true,
    grado: "5",
    grupo: "B",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Santiago",
    alumno: false,
    grado: "5",
    grupo: "B",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Andrea",
    alumno: true,
    grado: "6",
    grupo: "D",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Fabian",
    alumno: true,
    grado: "3",
    grupo: "D",
    identificacion: "",
    materias: [],
    hobbies: []
  },
  {
    nombre: "Javier",
    alumno: true,
    grado: "2",
    grupo: "F",
    identificacion: "",
    materias: [],
    hobbies: []
  },
];

// Necesito saber cuantos profesores tengo en mi escuela
const filtrado = escuela.filter((elemento) => elemento.alumno !== true);

// Necesito saber cuantos elementos tiene  mas de un hobbie
const filtrado1 = escuela.filter((elemento) => elemento.hobbies.length > 1);

 
// regresar solo los nombres de los elementos de arreglo
const nombres = escuela.map((curr) => curr.nombre);
// regresar solo los nombres de los elementos de arreglo, pero si son alumnos concatenar su
// grado y su grupo,
// pero si los alumnos son de un grado menor a 5, concatenar la palabra reservado
const nombres2 = escuela.map((elemento) => {
  if (elemento.alumno === true) {
    if (elemento.grado < 5 ) {
      return elemento.nombre.concat(elemento.grado).concat(elemento.grupo).concat("reservado")
    }
    return elemento.nombre.concat(elemento.grado).concat(elemento.grupo)
  }

  return elemento.nombre
});

// tienen la caracteristica de recorrer todo el arreglo
// map = regresar un arreglo de la misma longitud, pero no siempre con el mismo contenido
// filter = regresar un arreglo no con la misma longitud del arreglo original
// pero si con el mismo contenido mientras cumplan la condición
// reduce = puede regresar cualquier tipo de dato valido de js

// reduce
// sintaxis: arreglooriginal.reduce((prev, curr, pos, array) => {});
// reglas: 
// Siempre exige un return de valores
// Si el valor inicial es proporcionado, en la iteracion 0, el valor de prev sera el del 
// valor inicial, y el valor de curr será el de la posicion 0 del arreglo
// para las siguiente iteraciones, el valor de prev será el valor que regresa la funcion 
// modificadora y el de curr el valor de la iteracion actual

// si el valor inicial no es proporcionado, en la iteracion 0, el valor de prev será
// el de la posicion 0 del arreglo, de curr el valor de la posicion 1 del arreglo
// y en las siguientes iteraciones, prev tendra el valor que regresa la funcion 
// modificadora y el de curr el valor de la iteracion actual

const totalElementos = escuela.reduce((prev) => {
  prev = prev + 1;
  return prev
}, 0);

const totales = [90, 6, 7, 5, 23, 34, 45];

const totaldetotales = totales.reduce((prev, curr) => {
  return prev + curr
}, 100);

// iteracion 0
// prev 0
// curr 90
// return 90

// iteracion 1
// prev 90
// 6
// return 96

// iteracion 2
// prev 96
// curr 7
// return 103


// const totales = [90, 6, 7, 5, 23, 34, 45];

const totaldetotales1 = totales.reduce((prev, curr) => {
  return prev + curr
});

// iteracion 0
// prev 90
// curr 6
// return 96

// iteracion 1
// prev 96
// curr 7
// return 103

// iteracion 2
// prev 103
// curr 5
// return 108

// obtener cuantos alumnos y profesores tenemos
const filtrado2 = escuela.reduce((prev, curr) => {
  if (curr.alumno === true) {
    // prev[0]+=1; 
    prev.alumnos += 1;
    return prev; // [1, 0]
  }
  // prev[1]+=1
  prev.profesores+=1;
  return prev; // [1, 1]
//}, [0, 0]); // [alumnos, profesores]
}, { alumnos: 0, profesores: 0});

// iteracion 0
// prev [0, 0]
// curr  /*{
    // nombre: "Pedro",
    // alumno: true,
    // grado: "1",
    // grupo: "A",
    // identificacion: "",
    // materias: [],
    // hobbies: []
  // }, */
// return [1, 0]

// iteracion 1
// prev [1, 0]
// curr  {
  //   nombre: "Mariana",
  //   alumno: false,
  //   grado: "1",
  //   grupo: "B",
  //   identificacion: "",
  //   materias: [],
  //   hobbies: []
  // },
// return [1, 1]

// iteracion 1
// prev [1, 1]
// curr  {
  //   nombre: "Lizbeth",
  //   alumno: false,
  //   grado: "2",
  //   grupo: "C",
  //   identificacion: "",
  //   materias: [],
  //   hobbies: []
  // },
// return [1, 2]