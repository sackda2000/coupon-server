import mongoose from "mongoose";

const Coupon_schema = new mongoose.Schema({
  code: {
    type: String,
  },
  discount: {
    type: Number,
  },
});

export const CouponModel = mongoose.model("Coupon", Coupon_schema);