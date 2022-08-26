import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

app.listen(3333, () =>
  console.log(
    "Wow!! Everything up and running here!! Open http://localhost:3333/user"
  )
);
