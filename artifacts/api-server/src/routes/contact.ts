import { Router } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { db, contactSubmissionsTable } from "@workspace/db";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }

  try {
    await db.insert(contactSubmissionsTable).values({
      name: parsed.data.name,
      email: parsed.data.email,
      businessQuery: parsed.data.businessQuery ?? null,
      message: parsed.data.message,
    });

    res.json({ success: true, message: "Your inquiry has been received. Our team will be in touch within one business day." });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({ success: false, message: "An internal error occurred. Please try again." });
  }
});

export default router;
