"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const server_1 = require("./config/server");
const middleware_1 = require("./middleware");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(middleware_1.logger);
app.use("/api", routes_1.default);
app.get("*", (req, res) => {
    res.send("");
});
app.listen(server_1.PORT, () => {
    console.info(`Server running at http://localhost:${server_1.PORT}/`);
});
//# sourceMappingURL=index.js.map