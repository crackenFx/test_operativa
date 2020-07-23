const axios = require("axios");

async function obtenerDatos() {
  const respuesta = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326"
  );
  const resultados = respuesta.data.results;
  const log = resultados.map((dato) => ({
    id: dato.id,
    title: dato.title,
    category_id: dato.category_id,
  }));

  for (const nombreCategoria of log) {
    const buscarCategoria = await axios.get(
      "https://api.mercadolibre.com/categories/" + nombreCategoria.category_id
    );
    nombreCategoria.name = buscarCategoria.data.name;
  }

  let logCsv = `"id","title","category_id","name"`;

  for (const excel of log) {
    logCsv += `\n"${excel.id}","${excel.title}","${excel.category_id}","${excel.name}"`;
  }

  console.log(logCsv);
}

obtenerDatos();