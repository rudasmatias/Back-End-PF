const { Router } = require("express");
const locationRouter = Router();
const getAllLocations = require("../../Controllers/Location/getAllLocations");
const getLocationById = require("../../Controllers/Location/getLocationById");
const getLocationByProvincia = require("../../Controllers/Location/getLocationByProvincia");
const getLocationOfOneUser = require("../../Controllers/Location/getLocationOfOneUser");

locationRouter.get("/", (req, res) => {
  const { provincia } = req.query;
  !provincia ? getAllLocations(req, res) : getLocationByProvincia(req, res);
});
locationRouter.get("/:id_location", getLocationById);
locationRouter.get("/:id/user", getLocationOfOneUser);

module.exports = locationRouter;
