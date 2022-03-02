module.exports = {
  apps: [
    {
      name: "API",
      script: "./build/coupon.js",
      // watch: true,
      env: {
        PORT: 5000,
        DB_HOST: "mongodb+srv://sackda:12345@cluster0.g2g6g.mongodb.net/Coupon?retryWrites=true&w=majority",
      },
    },
  ],
};
