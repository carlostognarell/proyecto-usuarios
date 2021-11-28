const Menu = require("../models/menu");

function addMenu(req, res) {
  const { title, url, order, active } = req.body;
  const menu = new Menu();
  menu.title = title;
  menu.url = url;
  menu.order = order;
  menu.active = active;

  menu.save((err, createdMenu) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!createdMenu) {
        res.status(404).send({ message: "Error al crear el menu." });
      } else {
        res.status(200).send({ message: "Menu creado correctamente." });
      }
    }
  });
}

function getMenus(req, res) {
  Menu.find()
    .sort({
      order: "asc",
    })
    .exec((err, menusStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!menusStored) {
          res
            .status(404)
            .send({ message: "No se han encontrado elementos en el menu." });
        } else {
          res.status(200).send({ menu: menusStored });
        }
      }
    });
}

function updateMenu(req, res) {
  let menuData = req.body;
  const params = req.params;

  Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor" });
    } else {
      if (!menuUpdated) {
        res.status(404).send({ message: "Nose ha encontrado ningun menu" });
      } else {
        res.status(200).send({ message: "Menu actualizado correctamente" });
      }
    }
  });
}

function deleteMenu(req, res) {
  const { id } = req.params;

  Menu.findByIdAndRemove(id, (err, menuDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor" });
    } else {
      if (!menuDeleted) {
        res.status(404).send({ message: "Menu no encontrado" });
      } else {
        res
          .status(200)
          .send({ message: "El menu ha sido eliminado correctamente" });
      }
    }
  });
}

module.exports = {
  addMenu,
  getMenus,
  updateMenu,
  deleteMenu,
};
