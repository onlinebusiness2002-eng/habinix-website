import { Router } from "express";

const router = Router();

router.get("/payments/status", (_req, res) => {
  const stripeKey = process.env["STRIPE_SECRET_KEY"];
  const paypalClientId = process.env["PAYPAL_CLIENT_ID"];

  const isLive = Boolean(stripeKey && paypalClientId);

  res.json({
    live: isLive,
    mode: isLive ? "live" : "placeholder",
    message: isLive
      ? "Payment gateway is active and accepting contributions."
      : "Our Global Financial Gateway is Propagating. Subscribe below to be notified upon live launch.",
  });
});

export default router;
