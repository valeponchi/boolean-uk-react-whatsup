const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db/db.json");
const middlewares = jsonServer.defaults();

const PORT = 4000;

server.use(middlewares);

server.get("/conversations", (req, resp, next) => {
  let db = router.db;
  let { userId } = req.query;
  userId = Number(userId);

  if (userId > 0) {
    const results = db
      .get("conversations")
      .value()
      .filter(
        (chat) => chat.userId === userId || chat.participantId === userId
      );
    resp.json(results);
  } else {
    next();
  }
});

server.use(router);
server.listen(PORT, () => console.log(`Its up and running on port ${PORT}`));
