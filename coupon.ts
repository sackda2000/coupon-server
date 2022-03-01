import express from "express";
import mongoose from "mongoose";
import { CouponModel } from "./coupon_model";
import env from "dotenv";
import { CouponTypeModel } from "./coupon-type";

env.config();
const app = express();

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

    const data = await CouponModel.findOne({cp_code: coupon.cp_code,}).populate({ path: "cpt_id", select: "cpt_discount cpt_delivery" });

    if (!data) {

      return res.status(404).send("Not Found");
    }
    const discount = data.cpt_id.cpt_discount[0].dis_price

    const fee = data.cpt_id.cpt_delivery

    if (discount){

      const result = (coupon.product_price + coupon.fee) - discount

      return res.status(200).send(`Product_price = ${coupon.product_price}\n Fee = ${coupon.fee}\n Discount = ${discount}\n Total_price = ${result}`)
    }

    if (fee){

      const result = (coupon.product_price + fee)

      return res.status(200).send(`Product_price = ${coupon.product_price}\n Fee = ${fee}\n Total_price = ${result}`)
    }

  } catch (er) {

    return res.send("Error!!!");
  }
});

app.listen(5000, async () => {
  await mongoose.connect(process.env.DB_HOST!);
});
