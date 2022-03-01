import express from "express";
import mongoose from "mongoose";
import { CouponModel } from "./coupon_model";
import env from "dotenv";
import { CouponTypeModel } from "./coupon-type";

env.config();
const app = express();

const total_price = 50000;

app.use(express.json());

app.post("/addCoupon", async (req, res) => {

  try {

    const coupon = req.body;

    await CouponModel.create({

      cp_code: coupon.cp_code,

      cpt_id: coupon.cpt_id,
    });

    return res.status(200).json(`Add code ${coupon.cp_code}`);

  } catch (er) {

    return res.send("Error!!!");
  }
});

app.post("/addCoupontype", async (req, res) => {

  try {

    const coupon = req.body;

    await CouponTypeModel.create({ ...coupon });

    return res.status(200).json(`Add Coupon ${coupon.cpt_discount[0].dis_price}`);

  } catch (er) {

    return res.send("Error!!!");
  }
});

app.post("/checkCoupon", async (req, res) => {

  try {

    const coupon = req.body;

    const data = await CouponModel.findOne({cp_code: coupon.cp_code,}).populate({ path: "cpt_id", select: "cpt_discount" });
    
    if (!data) {

      return res.status(404).send("Not Found");
    }
    const discount = data.cpt_id.cpt_discount[0].dis_price

    const result = total_price - discount

    return res.status(200).send(`Total_price = ${total_price}\n Discount = ${discount}\n Total_pay = ${result}`)

  } catch (er) {

    return res.send("Error!!!");
  }
});

app.listen(5000, async () => {
  await mongoose.connect(process.env.DB_HOST!);
});
