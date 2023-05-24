import * as express from "express";
import { DefaultController } from "./";
import { slackFortuneResponse } from "../models/fortune";

class SlackController extends DefaultController {
  constructor() {
    super("/slack");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.all(this.path, this.getSlackResponseRandom);
  }

  private getSlackResponseRandom = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send(slackFortuneResponse());
  };
}

export default SlackController;
