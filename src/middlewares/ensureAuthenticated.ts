import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "15a24446-76a1-4a95-b6f5-7d5c976b0616");

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token invalid",
    });
  }
}
