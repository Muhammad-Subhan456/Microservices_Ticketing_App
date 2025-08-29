import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { User } from "../models/user";
import { Password } from "../services/password";
import { sign } from "jsonwebtoken";
import { RequestValidationError } from "../errors/request-validation-error";

const router = express.Router()

router.post('/api/users/signin', [
    body("email")
        .isEmail()
        .withMessage("Email must be valid"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password cannot be empty")
],
async (req: Request, res: Response) => {
     const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw new RequestValidationError(errors.array());
        }
})

export { router as signinRouter };