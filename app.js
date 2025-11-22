const fastify = require("fastify")({ logger: false });

// 🟢 Sanity Check Route
fastify.get("/", async (request, reply) => {
  return { status: "OK", message: "TDD Environment Ready" };
});

// TODO: Add your Sentiment Routes here...

module.exports = fastify;
