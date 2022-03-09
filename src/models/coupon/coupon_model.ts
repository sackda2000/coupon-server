import mongoose from "mongoose";
import { CouponTypeDoc } from "../coupon/coupon-type";
export interface CouponDoc extends mongoose.Document {
  cp_code: string;
  cpt_id: CouponTypeDoc;
  cp_startDate: string;
  cp_endDate: string;
  cp_max: number;
  cp_date: string;
  limit_qty_perUser: number;
  unorder_user: boolean;
  time_exclusive: {
    is_enabled: boolean;
    start: string;
    end: string;
  };
}

interface Coupon extends mongoose.Model<CouponDoc> {}

const CouponSchema = new mongoose.Schema(
  {
    cp_code: { type: String },
    cpt_id: { type: mongoose.Schema.Types.ObjectId, ref: "coupon_type" },
    cp_starDate: { type: Date },
    cp_endDate: { type: Date },
    cp_max: { type: Number, default: 0 },
    cp_date: { type: Date, default: Date.now },
    limit_qty_perUser: { type: Number, default: false },
    time_exclusive: {
      is_enabled: { type: Boolean, default: false },
      start: { type: String, default: null },
      end: { type: String, default: null },
    },
  },
  {
    collection: "coupon",
  }
);

export const CouponModel = mongoose.model<CouponDoc, Coupon>(
  "coupon",
  CouponSchema
);
