const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', [], async (req, res) => {
  try {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeSuccess) => {
      if (stripeErr) {
        res.status(500).send(stripeErr);
      } else {
        res.send(stripeSuccess);
      }
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
