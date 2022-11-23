const Game = require("../src/models/Game");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();
 
chai.use(chaiHttp);
 
describe("Games", () => {
  beforeEach((done) => {
    Game.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET Game", () => {
    it("it should GET all the games", (done) => {
      chai
        .request(app)
        .get("/api/games?page=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST game", () => {
    it("it should new POST a game", (done) => {
      let game = {
        title: "This is the first game",
        body: "This is a game post",
        thumbnail:
          "https://thumbnails.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/games")
        .send(game)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id game", () => {
    it("it should GET a game by the id", (done) => {
      let game = new Game({
        title: "This is the first game",
        constent: "This is a game post",
        thumbnail:
          "https://thumbnails.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      game.save((err, game) => {
        chai
          .request(app)
          .get("/api/games/" + game.id)
          .send(game)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id game", () => {
    it("it should UPDATE a game given the id", (done) => {
      let game = new Game({
        title: "This is the first game",
        content: "This is a game post",
        thumbnail:
          "https://thumbnails.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      game.save((err, game) => {
        console.log(game.id);
        chai
          .request(app)
          .put("/api/games/" + game.id)
          .send({
            title: "The first game was updated",
            content: "This is a game post",
            thumbnail:
              "https://thumbnails.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          })
          .end((err, res) => {
            res.should.have.status(201);
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id game", () => {
    it("it should DELETE a game given the id", (done) => {
      let game = new Game({
        title: "This is the first game",
        content: "This is a game game",
        thumbnail:
          "https://thumbnails.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      game.save((err, game) => {
        chai
          .request(app)
          .delete("/api/games/" + game.id)
          .end((err, res) => {
            res.should.have.status(204);
            done();
          });
      });
    });
  });
});