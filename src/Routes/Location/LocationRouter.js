const { Router } = require("express");
const locationRouter = Router();
const getAllLocations = require("../../Controllers/Location/getAllLocations");
const getLocationById = require("../../Controllers/Location/getLocationById");
const getLocationByProvincia = require("../../Controllers/Location/getLocationByProvincia");

locationRouter.get("/", (req, res) => {
  const { provincia } = req.query;
  !provincia ? getAllLocations(req, res) : getLocationByProvincia(req, res);
});
locationRouter.get("/:id_location", getLocationById);

module.exports = locationRouter;
