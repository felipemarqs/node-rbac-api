import { SignUpController } from "../application/controllers/SignUpController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export const makeSignUpController = () => {
  const signUpUseCase = makeSignUpUseCase();
  return new SignUpController(signUpUseCase);
};
