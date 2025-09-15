import express from "express";
import 'express-async-errors';
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler } from '@msatickets/common'
import { NotFoundError, currentUser } from '@msatickets/common';

import { deleteOrderRouter } from "./routes/delete";
import { indexRouter } from "./routes/index";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test' ,
  })
)

app.use(currentUser)
app.use(deleteOrderRouter)
app.use(indexRouter)
app.use(newOrderRouter)
app.use(showOrderRouter)

app.get('*',()=>{
  throw new NotFoundError();
})


app.use(errorHandler);


export {app};