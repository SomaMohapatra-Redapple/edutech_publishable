const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_Czcmd6nNU3pu0sUjKGT3TYAf');
const app = express();
app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())
app.use(cors())


const payment = async (req, res) => {

  res.json({msg :"you are in payment page"});

    try {
        console.log(req.body);
        token = req.body.token
      const customer = stripe.customers
        .create({
          email: "soma@redappletech.com",
          source: token.id
        })
        .then((customer) => {
          console.log(customer);
          return stripe.charges.create({
            amount: 1000,
            description: "Test Purchase using express and Node",
            currency: "USD",
            customer: customer.id,
          });
        })
        .then((charge) => {
          console.log(charge);
            res.json({
              data:"success"
          })
        })
        .catch((err) => {
            res.json({
              data: "failure",
            });
        });
      return true;
    } catch (error) {
      return false;
    }

    
}

module.exports = payment;