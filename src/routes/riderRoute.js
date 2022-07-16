const express = require("express");
const router = express.Router();
const {
  rideHistory,
  createBid,
  bidStatus,
  getRider,
  viewRequest,
  viewAllRequests,
  AcceptRequest,
  declineRequest,
  riderEarnings,
  endRide,
} = require("../controllers/rider.controller");

router.get("/riderEarnings", riderEarnings);
router.get("/history/:id", rideHistory);
router.post("/bid", createBid);
router.put("/status/:id", bidStatus);
router.get("/requests/:id", viewRequest);
router.get("/requests", viewAllRequests);
router.patch("/accept-request", AcceptRequest);
router.patch("/decline-request", declineRequest);
router.patch("/end-ride", endRide);
router.get("/:id", getRider);

module.exports = router;
