import express from "express";
import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInController } from "../factories/makeSignInController";
import { routeAdapter } from "./adapters/routeAdapter";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { middlewareAdapter } from "./adapters/middlewareAdapter";
import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";

const app = express();

app.use(express.json());

//SignUp Refactor : Created factories to instance the UseCases and Controllers

app.post("/sign-up", routeAdapter(makeSignUpController()));

app.post("/sign-in", routeAdapter(makeSignInController()));

app.get(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListLeadsController())
);

app.listen(3000, () => {
  console.log("\n🌐 Server running on port 3000 - Ready for action! 🚀");
  console.log("=====================================");
  console.log("🎉 Happy coding! Explore and build amazing things! 💻");
  console.log("=====================================\n");
});
