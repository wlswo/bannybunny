const gameService = require('../services/GameService');

exports.getAllGames = async (req, res) => {
    try {
      const games = await gameService.getAllGames(req.query.page);
      res.status(200).json({ data: games, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.createGame = async (req, res) => {
    try {
      console.log(req.body);
      const game = await gameService.createGame(req.body);
      res.status(201).json({ data: game, status: "success" });
    } catch (err) {
      res.status(400).json({ error: "잘못된 접근 입니다." });
    }
  };
   
  exports.getGameById = async (req, res) => {
    try {
      const game = await gameService.getGameById(req.params.id);
      res.status(200).json({ data: game, status: "success" });
    } catch (err) {
      console.log(err.message);
      res.status(404).json({ error: "잘못된 접근 입니다." });
    }
  }; 
   
  exports.updateGame = async (req, res) => {
    try {
      //const userid = req.session.passport.user._id;
      await gameService.updateGame(req.params.id, req.body);
      res.status(201).json({ status: "success" });
    } catch (err) {
      res.status(400).json({ error: "잘못된 접근 입니다." });
    }
  };
   
  exports.deleteGame = async (req, res) => {
    try {
      const game = await gameService.deleteGame(req.params.id);
      res.status(204).json({status : "success"})
    } catch (err) {
      res.status(400).json({ error: "잘못된 접근 입니다." });
    }
  };