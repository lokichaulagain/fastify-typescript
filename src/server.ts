import fastify from "fastify";
const server = fastify();
const port = 4000;

server
  .get("/", (req, res) => {
    res.send({
      message: "Hello, World from fastify ts!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  });

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
