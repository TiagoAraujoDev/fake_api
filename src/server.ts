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
    port: 8080,
    host: "0.0.0.0",
  },
  () => {
    console.log("Server running");
  }
);
