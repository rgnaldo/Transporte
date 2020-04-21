const express = require ('express');
const routes = express.Router();

routes.post('/users', (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json({
    frete: "Rio preto da eva",
    valor: "800"
  });
});
module.exports = routes;

