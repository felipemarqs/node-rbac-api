import { IController, IRequest, IResponse } from "../interfaces/IController";
import { ZodError, z } from "zod";
import { SignUpUseCase } from "../useCases/SignUpUseCase";
import { SignInUseCase } from "../useCases/SignInUseCase";
import { InvalidCredentials } from "../errors/InvalidCredentials";

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6),
});

export class SignInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, password } = schema.parse(body);

      const { accessToken } = await this.signInUseCase.execute({
        email,
        password,
      });

      return { statusCode: 204, body: { accessToken } };
    } catch (error) {
      if (error instanceof ZodError) {
        return { statusCode: 400, body: error.issues };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: {
            error: "Invalid credentials",
          },
        };
      }

      throw error;
    }
  }
}