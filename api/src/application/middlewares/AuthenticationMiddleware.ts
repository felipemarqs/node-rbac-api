import {
  IData,
  IMiddleware,
  IRequest,
  IResponse,
} from "../interfaces/IMiddleware";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;
    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: "Invalid Access Token",
        },
      };
    }

    return {
      data: {
        accountId: "213",
      },
    };
  }
}
