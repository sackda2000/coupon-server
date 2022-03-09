import { Router, Request, Response } from "express";
import { decryptCoupon } from "./decode";
import { checkCoupon } from "./checkCoupon";
import { calculate_coupon } from "./calcelate_coupon/dis_price";

const router = Router();

router.post("/useCoupon", async (req: Request, res: Response) => {
  try{
    const {cp_code,totalPrice} = req.body
    
    const coupon = decryptCoupon(cp_code)
     
    const check_Coupon = await checkCoupon(coupon)

    const calculate = calculate_coupon(totalPrice, check_Coupon!.cpt_id.cpt_discount[0].dis_price)

    console.log(calculate)

    return res.status(200).json(calculate)

  }catch(err){
    return res.status(400).send(err);
  }
});

export { router as use_coupon_route };