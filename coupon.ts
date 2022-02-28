import express from "express";
import mongoose from "mongoose";
import { CouponTypeModel } from "./coupon_model";
import env from "dotenv";

env.config();
const app = express();

app.use(express.json());

app.post("/addCoupon", async (req, res) => {
  try {
    const coupon = req.body;

    await CouponTypeModel.create({
      cp_code: coupon.cp_code,
      cpt_discount: coupon.cpt_discount,
    });

    return res.status(200).json(`Add Coupon ${coupon.cp_code}`);
  } catch (er) {
    return res.send("Error!!!");
  }
});

app.post("/checkCoupon", async (req, res) => {
  try {
    const coupon = req.body;

    const data = await CouponTypeModel.findOne({ cp_code: coupon.cp_code });

    console.log(data);

    if (!data) {
      return res.status(404).send("Not Found");
    }
  } catch (er) {
    return res.send("Error!!!");
  }
});

app.listen(5000, async () => {
  await mongoose.connect(process.env.DB_HOST!);
});
