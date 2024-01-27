import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

export const makeSignUpUseCase = () => {
  const SALT = 10;
  return new SignUpUseCase(SALT);
};
