import { Router, Request, Response } from "express";
import { decryptCoupon } from "./decode";
import { checkCoupon } from "./checkCoupon";
import { calcelateCouponDiscount } from "./calcelate_coupon";

const router = Router();

router.post("/useCoupon", async (req: Request, res: Response) => {
  try{
    const {cp_code,totalPrice} = req.body
    
    const coupon = decryptCoupon(cp_code)
     
    const check_Coupon = await checkCoupon(coupon)

    const discount = calcelateCouponDiscount(totalPrice, check_Coupon!.cpt_id.cpt_discount[0])

    console.log(discount)

    return res.status(200).json(discount)

  }catch(err){
    return res.status(400).send(err);
  }
});

export { router as use_coupon_route };