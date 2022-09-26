const { Users } = require("../models");

// Read user
const Read = async (req, res) => {
  const readUser = await Users.findAll();
  res.status(200).json({ readUser });
};

//  Create
const Create = async (req, res) => {
  const { firstname, lastname, mail } = req.body;
  if (!firstname || !lastname || !mail) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  const newUser = await Users.create({ firstname, lastname, mail });
  res.status(201).json({ newUser });
};

// Modify
const Modify = async (req, res) => {
  const id = req.params.id;
  const newUpdate = await Users.update(req.body, { where: { id: id } });
  return res.status(200).json({ newUpdate });
};

// Delete
const Delete = async (req, res) => {
  const id = req.params.id;
  const newDelete = await Users.destroy({ where: { id: id } });
  return res.json(200);
};

module.exports = { Read, Create, Modify, Delete };
