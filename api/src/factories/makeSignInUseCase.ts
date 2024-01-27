import { SignInUseCase } from "../application/useCases/SignInUseCase";

export const makeSignInUseCase = () => {
  return new SignInUseCase();
};
