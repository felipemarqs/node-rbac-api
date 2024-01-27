import express from "express";
import { SignInUseCase } from "../application/useCases/SignInUseCase";

import { SignInController } from "../application/controllers/SignInController";
import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInUseCase } from "../factories/makeSignInUseCase";
import { makeSignInController } from "../factories/makeSignInController";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

//SignUp Refactor : Created factories to instance the UseCases and Controllers

app.post("/sign-up", routeAdapter(makeSignUpController()));

app.post("/sign-in", routeAdapter(makeSignInController()));

app.listen(3000, () => {
  console.log("\n🌐 Server running on port 3000 - Ready for action! 🚀");
  console.log("=====================================");
  console.log("🎉 Happy coding! Explore and build amazing things! 💻");
  console.log("=====================================\n");
});
