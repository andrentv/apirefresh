import { Request, Response } from "express";
import { client } from "../../prisma/client";

export class FindBarbers {
 async handle(request: Request, response: Response) {
       
    const barbers = await client.barber.findMany({
    	include: {
    		Photo: true,
    		Service: true,
    		Available: true, 
    		Testimonial: true, 
    		Appointment: true,
    	},
    });
    
    return response.json(barbers);
  }
}



