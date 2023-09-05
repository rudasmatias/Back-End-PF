const { Router } = require("express");
const favoritosRouter = Router();
const getAllFavorites = require("../../Controllers/Favoritos/getAllFavorites");
const addFavorite = require("../../Controllers/Favoritos/addFavorite");
const deleteFavorite = require("../../Controllers/Favoritos/deleteFavorite");

favoritosRouter.get("/:UserId", getAllFavorites);

favoritosRouter.post("/:ProductIdProducto/:UserId", addFavorite);

favoritosRouter.delete("/:ProductIdProducto/:UserId", deleteFavorite);

module.exports = favoritosRouter;
