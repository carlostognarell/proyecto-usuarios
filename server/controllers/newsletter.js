const Newsletter = require("../models/newsletter");

function suscribeEmail(req, res) {
  const email = req.params.email;
  const newsletter = new Newsletter();

  if (!email) {
    res.status(404).send({ code: 400, message: "El email es obligatorio." });
  } else {
    newsletter.email = email.toLowerCase();
    newsletter.save((err, createdNewsletter) => {
      if (err) {
        res.status(500).send({ code: 500, message: "Error del servidor." });
      } else {
        if (!createdNewsletter) {
          res
            .status(404)
            .send({ code: 400, message: "Error al crear la suscripción." });
        } else {
          res
            .status(200)
            .send({ code: 200, message: "Suscripción creada correctamente." });
        }
      }
    });
  }
}

module.exports = {
  suscribeEmail,
};
