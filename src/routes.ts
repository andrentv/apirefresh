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

router.get("/barbers", ensureAuthenticated, (request, response) => {
//router.get("/barbers", (request, response) => {
  return response.json([
    { id: 1, name: "Andre Vaccaro", avatar: "https://picsum.photos/200", stars: 1.5, photo: "https://picsum.photos/200" },
    { id: 2, name: "Luis Vaccaro", avatar: "https://picsum.photos/200", stars: 1.5, photo: "https://picsum.photos/200" },
    { id: 3, name: "João Vaccaro", avatar: "https://picsum.photos/200", stars: 1.5, photo: "https://picsum.photos/200" },
    { id: 4, name: "Pedro Vaccaro", avatar: "https://picsum.photos/200", stars: 1.5, photo: "https://picsum.photos/200" },
  ]);
});

export { router };
