const mongoose = require("mongoose");

const User = require("src\routes\user.routes.js");

const request = require("supertest");
const app = require("../index");



it("register", async () => {
    const res = await request(app)
      .post("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

  it("login", async () => {
    const res = await request(app)
      .post("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

  it("prev-login", async () => {
    const res = await request(app)
      .post("src\routes\cart.routes.js")
      
      .auth(token1, { type: "bearer" });
    expect(res.statusCode).toEqual(200);
  });

 