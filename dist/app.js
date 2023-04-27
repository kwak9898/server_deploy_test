"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.port = 3000;
    }
    main() {
        this.app.get("/", (req, res) => {
            res.send("server deploy tutorial");
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`🎉 Connected Server http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
