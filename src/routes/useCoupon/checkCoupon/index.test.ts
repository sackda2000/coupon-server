import { CouponModel } from "../../../models/coupon/coupon_model";

describe("check coupon", () => {
  it("should return null if no code", () => {
    const code = "11111";
    if (!!!code) {
      console.log(null);
    }
    console.log(code);
  });

  it("should return null if no code in server", async () => {
    const code = "11111";
    const coupon = await CouponModel.findOne({ cp_code: code }).populate({
      path: "cpt_id",
    });

    if (!coupon) {
      console.log(null);
    }

    console.log(coupon);
  });
});
