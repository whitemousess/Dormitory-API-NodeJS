const router = require("express").Router();
const Stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/sent-payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount: amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "Failure";
  }
  res.json({ error, status });
});

module.exports = router;
