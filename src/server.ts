"use strict";

import Koa from "koa";
import koaBody from "koa-body";
import cors from "koa2-cors";
import { variables } from "./variables";

import router from "./routes";

const app = new Koa();
app.use(koaBody());
app.use(
  cors({
    origin: "*",
  })
);

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
app.listen(variables.port, () => {
  console.log(
    `API server listening on ${variables.host}:${variables.port}, in ${variables.env}`
  );
});

// Expose app
module.exports = app;
