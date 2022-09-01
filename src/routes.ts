import { Router, Request, Response } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";
import { FindBarber } from "./useCases/findBarbers/FindBarber";
import { FindBarbers } from "./useCases/findBarbers/FindBarbers";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

const findBarber = new FindBarber();
const findBarbers = new FindBarbers();

router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/auth/refresh", refreshTokenUserController.handle);

//router.get("/barbers", ensureAuthenticated, (request, response) => {
router.get("/barber/:id", findBarber.handle);
router.get("/barbers", findBarbers.handle);

export { router };

/*
 (request, response) => {
  return response.json([
    {
      available: [[], [], []],
      favorited: false
    },
  ]);
});
9f5bde46-9df9-4ae8-9b9e-617d07b78563
6806735d-2465-48f5-9e53-5170dbb7d53e
// -23.48455541518044 -46.85021836554122
*/

