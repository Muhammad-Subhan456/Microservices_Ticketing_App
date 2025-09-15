import { requireAuth } from "@msatickets/common"
import express, { Request, Response } from "express"
const router = express.Router()

router.get('/api/orders/:orderId', requireAuth, async (req: Request, res: Response) => {
   // const orders = await Order.find({ userId: req.currentUser!.id }).populate('ticket');
    
    res.send({});
})

export { router as deleteOrderRouter }