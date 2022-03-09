import { decryptCoupon } from ".";
import CryptoJS from "crypto-js";

describe("Name of the group", () => {
  it("should not return error if secret is true", async () => {
    const coupon = "11111";

    const code = CryptoJS.AES.encrypt(coupon, "123");
    const result = decryptCoupon(code);

    console.log(result);
  });
});
