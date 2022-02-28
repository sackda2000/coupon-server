import mongoose from "mongoose";

type Data = {
  [key: string]: any;
};

interface Service extends Data {
  food: boolean;
  shop: boolean;
  ship: boolean;
}

export interface CouponTypeDoc extends mongoose.Document {
  cpt_name: string;
  cpt_detail: string;
  cpt_discount: { dis_percen: number; dis_price: number }[];
  cpt_delivery: number;
  limit_price: number;
  delivery_fee: { percentage: number; amount: number };
  subtotal: { percentage: number; amount: number };
  service: Service;
  cpt_data: string;
  restaurants: string[];
  shops: string[];
  customers: string[];
  max_discount: number;
}

interface CouponType extends mongoose.Model<CouponTypeDoc> {}

const CouponTypeSchema = new mongoose.Schema(
  {
    cpt_name: { type: String },
    cpt_detail: { type: String },
    cpt_discount: [
      {
        dis_percen: { type: Number, default: 0 },
        dis_price: { type: Number, default: 0 },
      },
    ],
    cpt_delivery: { type: Number, default: 0 },
    limit_price: { type: Number, default: 0 },
    delivery_fee: {
      percentage: { type: Number, default: null },
      amount: { type: Number, default: null },
    },
    subtotal: {
      percentage: { type: Number, default: null },
      amount: { type: Number, default: null },
    },
    service: {
      food: { type: Boolean, default: true },
      shop: { type: Boolean, default: false },
      ship: { type: Boolean, default: false },
    },
    cpt_date: { type: Date, default: Date.now },
    restuarants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restuarant",
        default: null,
      },
    ],
    shop: [{ type: mongoose.Schema.Types, ref: "gtds_shop", default: null }],
    customers: [
      { type: mongoose.Schema.Types, ref: "Customer", default: null },
    ],
    max_discount: { type: Number, default: null },
  },
  {
    collection: "coupon_type",
  }
);

export const CouponTypeModel = mongoose.model<CouponTypeDoc, CouponType>(
  "coupon_type",
  CouponTypeSchema
);
