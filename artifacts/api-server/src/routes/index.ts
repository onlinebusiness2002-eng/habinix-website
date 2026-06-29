import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import subscribeRouter from "./subscribe";
import paymentsRouter from "./payments";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(subscribeRouter);
router.use(paymentsRouter);

export default router;
