import { SignInController } from "../application/controllers/SignInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export const makeSignInController = () => {
  const signInUseCase = makeSignInUseCase();

  return new SignInController(signInUseCase);
};
