const users = require("./user.routes");
const posts = require("./post.routes");
const reviews = require("./review.routes");
const cart = require("./cart.routes");
const history = require("./history.routes");
const category = require("./Category.routes");

function routerApi(app) {
  app.use("/users", users);
  app.use("/posts", posts);
  app.use("/reviews", reviews);
  app.use("/history", history);
  app.use("/cart", cart);
  app.use("/category", category);
}

module.exports = routerApi;
