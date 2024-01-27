import { IController, IRequest, IResponse } from "../interfaces/IController";
import { ZodError, z } from "zod";
import { SignUpUseCase } from "../useCases/SignUpUseCase";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(6),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);

      await this.signUpUseCase.execute({ name, email, password });

      return { statusCode: 204, body: null };
    } catch (error) {
      if (error instanceof ZodError) {
        return { statusCode: 400, body: error.issues };
      }

      throw error;
    }
  }
}
