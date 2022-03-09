export const calculate_coupon = (totalPrice: any, dis_price: any) => {

  try {

    const result = totalPrice - dis_price;

    return result;

  } catch (err) {
      
    console.log(err);
  }
};
