import "express-async-errors";
import helmet from "helmet";
import express, {json} from "express";
import { carsRouter } from "./routes/cars.routes";
import { HandleErrorsMiddleware } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(json());
app.use(helmet());

app.use("/cars", carsRouter);

app.use(HandleErrorsMiddleware.execute)