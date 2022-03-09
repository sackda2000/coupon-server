import CryptoJS from "crypto-js";

export const decryptCoupon = (code: any) => {
  try {
    const bytes = CryptoJS.AES.decrypt(code, process.env.MY_KEY as string);
    const couponCode = bytes.toString(CryptoJS.enc.Utf8);
    return couponCode;
    
  } catch (err) {
    console.log(err);
    return null
  }
};
