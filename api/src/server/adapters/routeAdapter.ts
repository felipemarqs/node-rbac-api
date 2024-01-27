import { Request, Response } from "express";
import { IController } from "../../application/interfaces/IController";

export const routeAdapter = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const { statusCode, body } = await controller.handle({
      body: request.body,
      accountId: undefined,
    });

    console.log(request.metadata);

    response.status(statusCode).json(body);
  };
};
