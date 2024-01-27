import { ListLeadsController } from "../application/controllers/ListLeadsController";

export const makeListLeadsController = () => {
  return new ListLeadsController();
};
