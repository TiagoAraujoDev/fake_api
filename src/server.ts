import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { items } from "./db";

type Items = typeof items;

const fastify = Fastify({
  logger: true,
});

fastify.get("/items", (_: FastifyRequest, reply: FastifyReply) => {
  const itemsList: Items = items;
  return reply.send(itemsList);
});

fastify.listen(
  {
    host: "0.0.0.0",
    port: 8080,
  },
  (err, address) => {
    if (!err) {
      console.log("🚀 Server running!");
      console.log(`🌐 Access: ${address}`);
    }
  }
);
