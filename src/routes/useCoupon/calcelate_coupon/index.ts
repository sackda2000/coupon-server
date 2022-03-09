import { calculate_percen } from "./dis_percen";
import { calculate_discount } from "./dis_price";

export const calcelateCouponDiscount = (totalPrice: any, discount: any) => {

  try {

    if (discount.dis_price) {

      const dis_price = calculate_discount(totalPrice, discount.dis_price);

      return dis_price;
    }
    else if (discount.dis_percen){

      const dis_percen = calculate_percen(totalPrice, discount.dis_percen);

      return dis_percen;
    }
  } catch (err) {

    console.log(err);
  }
};
