import orchestrator from "tests/orchestrator.js";
import { version as uuidVersion } from "uuid";
import user from "models/user.js";
import password from "models/password.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/sessions", () => {
  describe("Anonymous user", () => {
    test("With correct `email` but incorrect `password`", async () => {
      await orchestrator.createUser({
        password: "right-password",
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "wrong.email@email.com",
          password: "right-password",
        }),
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "The authentication data is not correct.",
        action: "Check if the data is right.",
        status_code: 401,
      });
    });

    test("With incorrect `email` but correct `password`", async () => {
      await orchestrator.createUser({
        email: "right.email@email.com",
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "right.email@email.com",
          password: "wrong-password",
        }),
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "The authentication data is not correct.",
        action: "Check if the data is right.",
        status_code: 401,
      });
    });

    test("With incorrect `email` but incorrect `password`", async () => {
      await orchestrator.createUser();

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "wrong.email@email.com",
          password: "wrong-password",
        }),
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "The authentication data is not correct.",
        action: "Check if the data is right.",
        status_code: 401,
      });
    });

    test("With correct `email` but correct `password`", async () => {
      await orchestrator.createUser({
        email: "everything.right@email.com",
        password: "everything-right",
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "everything.right@email.com",
          password: "everything-right",
        }),
      });

      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(responseBody).toEqual({});
    });
  });
});
