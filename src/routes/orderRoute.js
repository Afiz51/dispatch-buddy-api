const express = require("express");
const router = express.Router();
const {
  orderStatus,
  createOrder,
  orderHistory,
  getOrderStatus,
  getAllOrders,
} = require("../controllers/order.controller");

router.get("/orders/:id", orderHistory);
router.post("/request", createOrder);
router.put("/status/:id", orderStatus);
router.get("/order-status/:id", getOrderStatus);
router.get("/shipper-orders/:id", getAllOrders);

module.exports = router;
