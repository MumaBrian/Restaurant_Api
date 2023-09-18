require("dotenv").config();
import { Utils } from "./utils/Utils";
import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";
import BannerRouter from "./routers/BannerRouter";
import CityRouter from "./routers/CityRouter";
import RestaurantRouter from "./routers/RestaurantRouter";
import CategoryRouter from "./routers/CategoryRouter";
import ItemRouter from "./routers/ItemRouter";
import AddressRouter from "./routers/AddressRouter";
import OrderRouter from "./routers/OrderRouter";
import { Redis } from "./utils/Redis";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigs() {
    this.dotenvConfigs();
    this.connectMongoDB();
    this.connectRedis();
    this.allowCors();
    this.configureBodyParser();
  }

  dotenvConfigs() {
    Utils.dotenvConfigs();
  }

  connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
      console.log("Connected to mongodb.");
    });
  }

  connectRedis() {
    Redis.connectToRedis();
  }

  configureBodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    this.app.use(express.json());
    // this.app.use(bodyParser.json());
  }

  allowCors() {
    this.app.use(cors());
  }

  setRoutes() {
    this.app.use("/src/uploads", express.static("src/uploads"));
    this.app.use("/user", UserRouter);
    this.app.use("/banner", BannerRouter);
    this.app.use("/city", CityRouter);
    this.app.use("/restaurant", RestaurantRouter);
    this.app.use("/category", CategoryRouter);
    this.app.use("/item", ItemRouter);
    this.app.use("/address", AddressRouter);
    this.app.use("/order", OrderRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong. Please try again!",
        status_code: errorStatus,
      });
    });
  }
}
