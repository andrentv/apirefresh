import { Router, Request, Response } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/auth/refresh", refreshTokenUserController.handle);

router.get("/courses", ensureAuthenticated, (request, response) => {
  //router.get("/courses", (request, response) => {
  return response.json([
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "DDD" },
  ]);
});

export { router };
