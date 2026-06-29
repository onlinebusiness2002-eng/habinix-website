import { Router } from "express";
import { SubscribeEmailBody } from "@workspace/api-zod";
import { db, subscribersTable } from "@workspace/db";

const router = Router();

router.post("/subscribe", async (req, res) => {
  const parsed = SubscribeEmailBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  try {
    await db.insert(subscribersTable).values({ email: parsed.data.email }).onConflictDoNothing();
    res.json({ success: true, message: "You're on the list. We'll notify you the moment our global financial gateway goes live." });
  } catch (err) {
    req.log.error({ err }, "Failed to save subscriber");
    res.status(500).json({ success: false, message: "An internal error occurred. Please try again." });
  }
});

export default router;
