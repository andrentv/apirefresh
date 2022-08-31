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

//router.get("/barbers", ensureAuthenticated, (request, response) => {
router.get("/barbers", (request, response) => {
  return response.json([
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 1,
      name: "Andre Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 1.5,
      loc: "São Paulo",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: ["corte masc.", "corte fem"],
      testimonials: ["Excelente", "Ótimo"],
      id: 2,
      name: "Luis Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 2.5,
      loc: "São Paulo",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 3,
      name: "João Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 4.5,
      loc: "São Paulo",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 4,
      name: "Pedro Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 3.5,
      loc: "São Paulo",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 5,
      name: "Douglas Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 3.5,
      loc: "São Paulo",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 6,
      name: "Tiago Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 3.5,
      loc: "Campinas",
    },
    {
      available: [[], [], []],
      favorited: false,
      photos: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      services: [
        { item: "corte masc.", price: "20.00" },
        { item: "corte fem.", price: "20.00" },
      ],
      testimonials: ["Excelente", "Ótimo"],
      id: 7,
      name: "Judas Vaccaro",
      avatar: "https://picsum.photos/200",
      stars: 3.5,
      loc: "Campinas",
    },
  ]);
});
// -23.48455541518044 -46.85021836554122

export { router };
