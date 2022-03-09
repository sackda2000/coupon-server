import { Router, Request, Response } from "express";
import { CouponModel } from "../../models/coupon/coupon_model";
import CryptoJS from "crypto-js";
import { CouponTypeModel } from "../../models/coupon/coupon-type";


const router = Router();
router.post("/addCoupon", async (req: Request, res: Response) => {
  try {
    const coupon = req.body;

    await CouponModel.create({ ...coupon });

    const code = CryptoJS.AES.encrypt(coupon.cp_code, process.env.MY_KEY!);

    res.send(`Add code ${code}`);

  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/addCoupontype", async (req: Request, res: Response) => {
  try {
    const discount = req.body;

    await CouponTypeModel.create({ ...discount });

    res.send(`Add discount ${discount}`);

  } catch (err) {
    return res.status(400).send(err);
  }
});

export { router as add_coupon_route };