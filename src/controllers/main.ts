import * as express from "express";
import { DefaultController } from "./";
import { defaultFortuneResponse } from "../models/fortune";

class MainController extends DefaultController {
  constructor() {
    super("/");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getFortuneRandom);
  }

  private getFortuneRandom = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send(defaultFortuneResponse());
  };
}

export default MainController;
