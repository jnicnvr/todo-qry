const controller = require('../controller/todo.controller')
const validate = require('../middleware/validation')

module.exports = (app) => {
    app.post("/api/todo/show", controller.show);
    app.post("/api/todo/pagination-search", controller.fetchAll);
}