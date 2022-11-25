/**
 * localhost:3001/api/games
 * 리스트가져오기, 글등록, 글수정, 글삭제, 글읽기
 */

const express = require("express");
const router = express.Router();
const {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame,
} = require("../controller/GameController");

router.route("/").get(getAllGames).post(createGame);

router.route("/:id").get(getGameById).patch(updateGame).delete(deleteGame);

module.exports = router;
