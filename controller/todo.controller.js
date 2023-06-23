const {
  show,
  fetchAll,
} = require("../service/todo.service");
const { successModel, failModel } = require("../models/response.model");

module.exports = {
  //create
  fetchAll: (req, res) => {
    fetchAll(req.body, (isSuccess, data) => {
      if (isSuccess) {
        res
          .status(200)
          .send({ ...successModel, message: "Success on search", data });
      } else {
        res.status(500).send({ ...failModel, error: data });
      }
    });
  },
  //show
  show: (req, res) => {
    show(req.body, (isSuccess, data) => {
      if (isSuccess) {
        res
          .status(200)
          .send({ ...successModel, message: "Success on search", data });
      } else {
        res.status(500).send({ ...failModel, error: data });
      }
    });
  },
};
