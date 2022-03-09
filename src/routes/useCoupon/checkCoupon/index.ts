import { CouponModel } from "../../../models/coupon/coupon_model";

export const checkCoupon = async (code: any) => {
  try {
    if (!!!code) {
      return null;
    }

    const coupon = await CouponModel.findOne({ cp_code: code }).populate({
      path: "cpt_id", select: "cpt_discount"
    });

    if (!coupon) {
      return null;
    }

    return coupon;
  } catch (err) {
    console.log(err);
    return null;
  }
};
