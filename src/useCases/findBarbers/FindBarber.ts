import { Request, Response } from "express";
import { client } from "../../prisma/client";

export class FindBarber {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const barber = await client.barber.findFirst({
      where: {
        id,
      },
      include: {
        Photo: true,
        Service: true,
        Available: true,
        Testimonial: true,
        Appointment: true,
      },
    });

    return response.json(barber);
  }
}
