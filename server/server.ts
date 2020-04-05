import * as dotenv from "dotenv";
import * as express from "express";
import * as morgan from "morgan";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as config from "../webpack.config.js";

import { router } from "./routes";

dotenv.config();

const app = express();
const compiler = webpack(config);

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`[SERVER] is up and running on ${port} ...`)
);

export { app };
