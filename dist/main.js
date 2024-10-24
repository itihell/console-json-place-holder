"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("./controllers");
(async () => {
    console.time("post");
    await (0, controllers_1.renderUser)();
    console.timeEnd("post");
})();
