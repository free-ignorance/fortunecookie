import * as bodyParser from "body-parser";
import * as express from "express";
import helmet from "helmet";
import compression from "compression";

const PORT = process.env.PORT || 5000;

interface Controller {
  path: string;
  router: express.Router;
}

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express.default();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(PORT, () => {
      console.log(`App listening on the port ${PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(bodyParser.json());
    
    /** set up cors middleware
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     * @param {Next} next - Express Next object
     */
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization, Content-Type, Origin, X-Requested-With"
      );
      res.header("Access-Control-Allow-Methods", "GET");
      next();
    });
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }
}

export default App;
