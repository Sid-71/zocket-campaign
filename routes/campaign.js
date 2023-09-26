const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");
const auth = middleware.auth;
const campaignController = require("../controllers/Campaign");



router.post("/create-campaign",campaignController.createCampaign);
router.get("/get-campaign",campaignController.getCampaign);
router.delete("/delete-campaign",campaignController.deleteCampaign);
router.post("/edit-campaign",campaignController.editCampaign);


module.exports = router;