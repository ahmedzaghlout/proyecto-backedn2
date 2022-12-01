const mongoose = require("mongoose");

const User = require("src\routes\user.routes.js");

const request = require("supertest");
const app = require("../index");


it("getCart", async () => {
    const res = await request(app)
      .get("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

  it("addToCart", async () => {
    const res = await request(app)
      .post("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

  it("buyCart", async () => {
    const res = await request(app)
      .post("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

  it("removeFromCart", async () => {
    const res = await request(app)
      .delete("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });
  