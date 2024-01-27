import { Request, Response } from "express";
import { IController } from "../../application/interfaces/IController";

export const routeAdapter = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const { statusCode, body } = await controller.handle({
      body: request.body,
    });

    response.status(statusCode).json(body);
  };
};
