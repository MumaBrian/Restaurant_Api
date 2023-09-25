"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Utils_1 = require("./utils/Utils");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const environment_1 = require("./environments/environment");
const UserRouter_1 = require("./routers/UserRouter");
const BannerRouter_1 = require("./routers/BannerRouter");
const CityRouter_1 = require("./routers/CityRouter");
const RestaurantRouter_1 = require("./routers/RestaurantRouter");
const CategoryRouter_1 = require("./routers/CategoryRouter");
const ItemRouter_1 = require("./routers/ItemRouter");
const AddressRouter_1 = require("./routers/AddressRouter");
const OrderRouter_1 = require("./routers/OrderRouter");
const Redis_1 = require("./utils/Redis");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
class Server {
    constructor() {
        this.app = express();
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
        Utils_1.Utils.dotenvConfigs();
    }
    connectMongoDB() {
        mongoose.connect((0, environment_1.getEnvironmentVariables)().db_uri).then(() => {
            console.log("Connected to mongodb.");
        });
    }
    connectRedis() {
        Redis_1.Redis.connectToRedis();
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use(express.json());
        this.app.use(bodyParser.json());
    }
    allowCors() {
        this.app.use(cors());
    }
    setRoutes() {
        this.app.use("/src/uploads", express.static("src/uploads"));
        this.app.use("/user", UserRouter_1.default);
        this.app.use("/banner", BannerRouter_1.default);
        this.app.use("/city", CityRouter_1.default);
        this.app.use("/restaurant", RestaurantRouter_1.default);
        this.app.use("/category", CategoryRouter_1.default);
        this.app.use("/item", ItemRouter_1.default);
        this.app.use("/address", AddressRouter_1.default);
        this.app.use("/order", OrderRouter_1.default);
        this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
exports.Server = Server;
