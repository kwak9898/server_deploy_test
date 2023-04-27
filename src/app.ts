import express from "express";

export default class App {
  public app: express.Application;
  public port: number;
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.port = 3000;
  }

  public main() {
    this.app.get("/", (req, res) => {
      res.send("server deploy tutorial");
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🎉 Connected Server http://localhost:${this.port}`);
    });
  }
}
