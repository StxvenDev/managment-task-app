import { Router } from "express";
import { validateMongoId } from "../middleware/userValidations.js";
import { getUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/',[validateMongoId],getUser);

export default userRouter;