const { Products, Categories, Seccion, Agrupador } = require("../db");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

const DB_connect = async () => {
  try {
    const productFilePath = path.join(__dirname, "../../dataProducts.json");
    const productRawData = fs.readFileSync(productFilePath);
    const productData = JSON.parse(productRawData);

    const categoryFilePath = path.join(__dirname, "../../dataCategories.json");
    const categoryRawData = fs.readFileSync(categoryFilePath);
    const categoryData = JSON.parse(categoryRawData);

    const agrupadorFilePath = path.join(__dirname, "../../dataAgrupador.json");
    const agrupadorRawData = fs.readFileSync(agrupadorFilePath);
    const agrupadorData = JSON.parse(agrupadorRawData);

    const seccionFilePath = path.join(__dirname, "../../dataSeccion.json");
    const seccionRawData = fs.readFileSync(seccionFilePath);
    const seccionData = JSON.parse(seccionRawData);

    if (!productData.results || !categoryData) {
      console.log("No results found in the data.");
      return;
    }

    const uniqueProducts = new Set();
    const uniqueCategories = new Set();

    for (const item of productData.results) {
      const nombre = item.nombre;

      if (!uniqueProducts.has(nombre)) {
        uniqueProducts.add(nombre);

        const productData = {
          id_producto: item.id_producto,
          id_categoria: item.id_categoria,
          id_seccion: item?.id_seccion || null,
          destacado: item.destacado || null,
          nombre: item.nombre,
          precio: item.precio || null,
          vendible: item.vendible || false,
          stock: item.stock || null,
          garantia: item.garantia || null,
          iva: item.iva || null,
          imagenes: item.imagenes || [],
          caracteristicas: item?.caracteristicas,
        };

        const [product, created] = await Products.findOrCreate({
          where: { nombre },
          defaults: productData,
        });

        // Access product characteristics directly
        // const productCharacteristics = {
        //   color: item?.caracteristicas?.color || null,
        //   botones: item?.caracteristicas?.botones || null,
        //   iluminacion: item?.caracteristicas?.iluminacion || false,
        //   usb: item?.caracteristicas?.usb || false,
        //   dpi_min: item?.caracteristicas?.dpi_min || null,
        //   dpi_max: item?.caracteristicas?.dpi_max || null,
        //   largo_cable: item?.caracteristicas?.largo_cable || null,
        //   curvo: item?.caracteristicas?.curvo || false,
        //   consumo: item?.caracteristicas?.consumo || null,
        //   pulgadas: item?.caracteristicas?.pulgadas || null,
        //   parlantes: item?.caracteristicas?.parlantes || null,
        //   control_remoto: item?.caracteristicas?.control_remoto || false,
        //   entrada_hdmi: item?.caracteristicas?.entrada_hdmi || null,
        //   webcam: item?.caracteristicas?.webcam || false,
        //   ram: item?.caracteristicas?.ram || null,
        //   capacidad: item?.caracteristicas?.capacidad || null,
        //   modelo: item?.caracteristicas?.modelo || null,
        //   familia: item?.caracteristicas?.familia || null,
        //   socket: item?.caracteristicas?.socket || null,
        //   frecuencia: item?.caracteristicas?.frecuencia || null,
        //   nucleos: item?.caracteristicas?.nucleos || null,
        //   cooler: item?.caracteristicas?.cooler || false,
        //   cache: item?.caracteristicas?.cache || null,
        //   plataforma: item?.caracteristicas?.plataforma || null,
        //   chipset: item?.caracteristicas?.chipset || null,
        //   placa_sonido: item?.caracteristicas?.placa_sonido || null,
        //   wifi: item?.caracteristicas?.wifi || false,
        //   cantidad_memorias: item?.caracteristicas?.cantidad_memorias || null,
        //   tipo_memoria: item?.caracteristicas?.tipo_memoria || null,
        // };
      }
    }

    for (const categoryItem of categoryData) {
      const { id_categoria, nombre, id_agrupador, imagen, orden } =
        categoryItem;

      if (!uniqueCategories.has(nombre)) {
        uniqueCategories.add(nombre);

        await Categories.findOrCreate({
          where: { id_categoria: id_categoria },
          defaults: {
            nombre,
            id_agrupador,
            imagen,
            orden,
          },
        });
      }
    }

    for (const agrupadorItem of agrupadorData) {
      const { id_agrupador, nombre } = agrupadorItem;

      await Agrupador.findOrCreate({
        where: { id_agrupador },
        defaults: {
          nombre: nombre,
        },
      });
    }

    for (const seccionItem of seccionData) {
      const { id_seccion, nombre } = seccionItem;

      await Seccion.findOrCreate({
        where: { id_seccion },
        defaults: {
          nombre: nombre,
        },
      });
    }

    await Products.sync();
    await Categories.sync();
    await Seccion.sync();
    await Agrupador.sync();

    console.log("♥ Database Created... ♥");
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
};

module.exports = DB_connect;
