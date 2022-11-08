const express = require("express");
const router = express.Router();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const { request } = require("express");

const db = require("../Infraestructura/pool");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../Infraestructura/pool");
const dbFigurita = db.Modelo;

router.use(cors(corsOptions));
router.use(function (req, resp, next) {
  console.log("Time Entry:", Date.now());
  console.log("El metodo es: ", req.method);
  if (req.params.id) {
    console.log("el parametro es: ", req.params.id);
  }
  if (req.body) {
    console.log("el cuerpo de la solicitud es: ", req.body);
  }
  req.userName = "les pibes";
  next();
});

router.get("/", async (req, res, next) => {
  const results = await dbFigurita.findAll();
  res.send(results);
  next();
});

router.get("/paises/", async (req, res, next) => {
  const results = await sequelize.query("SELECT distinct pais FROM Figurita", {
    type: QueryTypes.SELECT,
  });
  console.log(JSON.stringify(results));
  res.send(results);
  next();
});

router.delete("/:id", async (req, res, next) => {
  let id = req.params.id;
  const results = await dbFigurita.destroy({
    where: {
      id: id,
    },
  });
  res.send({ message: "eliminado el ID:", id });
  next();
});
router.put("/:id", async (req, res, next) => {
  let id = req.params.id;
  let body = req.body;
  await dbFigurita.update(
    {
      nombre: body.nombre,
      pais: body.pais,
      tengo: body.tengo,
    },
    {
      where: { id: id },
    }
  );
  const mensaje = "";
  if (body.tengo <= 0) {
    mensaje = "No tenes esta figurita";
  } else if (body.tengo == 1) {
    mensaje = "de esta figurita, tenes 1";
  } else {
    mensaje = "figurita repetida no llena el album";
  }
  res.send({ message: mensaje });
  next();
});

router.use(function (req, resp, next) {
  console.log("Time Exit:", Date.now());
  next();
});
module.exports = router;