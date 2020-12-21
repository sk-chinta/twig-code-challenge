import Router from "koa-router";
const router = new Router();

import { runGroupArrayElements } from "./controllers";

export default router.post("/run-cases", runGroupArrayElements);
