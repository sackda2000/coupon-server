export const calculate_percen = (totalPrice: any, dis_percen: any) => {

    try {
  
      const result = totalPrice - ((totalPrice * dis_percen) / 100)
  
      return result;
  
    } catch (err) {
        
      console.log(err);
    }
};