import express from "express";
import { SignInUseCase } from "../application/useCases/SignInUseCase";

import { SignInController } from "../application/controllers/SignInController";
import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInUseCase } from "../factories/makeSignInUseCase";
import { makeSignInController } from "../factories/makeSignInController";

const app = express();

app.use(express.json());

//SignUp Refactor : Created factories to instance the UseCases and Controllers

app.post("/sign-up", async (request, response) => {
  const signUpController = makeSignUpController();

  const { statusCode, body } = await signUpController.handle({
    body: request.body,
  });
  response.status(statusCode).json(body);
});

app.post("/sign-in", async (request, response) => {
  const signInUseCase = makeSignInUseCase();
  const signInController = makeSignInController();

  const { body, statusCode } = await signInController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3000, () => {
  console.log("\n🌐 Server running on port 3000 - Ready for action! 🚀");
  console.log("=====================================");
  console.log("🎉 Happy coding! Explore and build amazing things! 💻");
  console.log("=====================================\n");
});
