import server from "./server.js";
import chalk from "chalk";
import { buildTables, seedDb } from "./db/dbRefresh.js";

const PORT = process.env.PORT || 8080;

await Promise.all(
  process.argv.map(async (arg) => {
    if (arg.toLowerCase() === "build") {
      await buildTables();
    }
    if (arg.toLowerCase() === "seed") {
      await seedDb();
    }
  })
);

console.log("?");

server.listen(PORT, () => {
  console.log(
    chalk.green(
      `Server running in ${process.env.NODE_ENV} mode and listening on ${PORT}`
    )
  );
});
