const app = require("./app");

describe("Sanity Check", () => {
  test("GET / returns 200 OK", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      status: "OK",
      message: "TDD Environment Ready",
    });
  });
});

// TODO: Add your Sentiment Tests below...
