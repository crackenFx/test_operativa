const axios = require("axios"); //requerimos el modulo axios que es para realizar consultas https

async function obtenerDatos() { //creamos una function asincrona
  const respuesta = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326"
  );
  const resultados = respuesta.data.results; //almacenamos la la informacion de la consulta https
  const log = resultados.map((dato) => ({ //mapeo al objeto para buscar los datos que necesitamos
    id: dato.id,
    title: dato.title,
    category_id: dato.category_id,
  }));

  for (const nombreCategoria of log) { // loop para buscar los nombres de la categoria realizando otra consulta http
    const buscarCategoria = await axios.get(
      "https://api.mercadolibre.com/categories/" + nombreCategoria.category_id
    );
    nombreCategoria.name = buscarCategoria.data.name; //almacenamos el nombre de la categoria en el objeto con la propiedad name
  }

  let logCsv = `"id","title","category_id","name"`; //creamos la cabecera para el archivo csv

  for (const excel of log) {//loop para almacenar en cada linea los datos que queremos para nuestro archivo csv
    logCsv += `\n"${excel.id}","${excel.title}","${excel.category_id}","${excel.name}"`;
  }

  console.log(logCsv);// mostramos los datos almacenados en la variable logcsv
}

obtenerDatos();