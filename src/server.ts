import App from "./app";

import HealthCheckController from "./controllers/health";
import MainController from "./controllers/main";

const app = new App([new HealthCheckController(), new MainController()]);

app.listen();
