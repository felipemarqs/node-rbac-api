import express, { response } from "express";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";
import { SignInUseCase } from "../application/useCases/SignInUseCase";

import { SignUpController } from "../application/controllers/SignUpController";
import { SignInController } from "../application/controllers/SignInController";

const app = express();

app.use(express.json());

app.post("/sign-up", async (request, response) => {
  const SALT = 10;
  const signUpUseCase = new SignUpUseCase(SALT);
  const signUpController = new SignUpController(signUpUseCase);

  const { statusCode, body } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.post("/sign-in", async (request, response) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

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
