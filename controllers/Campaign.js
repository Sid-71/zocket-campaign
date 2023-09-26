const Campaign = require("../models/Campaign");



const createCampaign = async(req,res)=>{
    try {
        const payload = req.body;
        const data = await Campaign.create(payload);
        res.status(201).send({
            message : "campaign is created",
            data : data
        })
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}
const getCampaign = async (req, res) => {
    try {
        const userId = req.query.userId;
        const { platform, status, name, days } = req.query; 
        const filters = { userId: userId };
        console.log("userId",userId);

        if (platform) {
            filters.platform = platform;
        }

        if (status) {
            filters.status = parseInt(status);
        }

        if (name) {
            
            filters.campaignName = new RegExp(name, 'i'); 
            console.log("name",filters.name)
        }

        
        if (days) {
            const currentDate = new Date();
            const thresholdDate = new Date(currentDate - (parseInt(days) * 24 * 60 * 60 * 1000));
            console.log("thresholdData",thresholdDate);
            filters.createdAt = { $gte: thresholdDate };
        }

       
        const data = await Campaign.find(filters);

        if (!data) {
            res.status(404).send({
                message: "campaign  not found"
            });
        }


        res.status(200).send({
            data: data
        });
    } catch (error) {
        res.status(400).send({
            error: error.message,
            stack: error.stack
        });
    }
}



const deleteCampaign  = async(req,res)=>{
    try {
        const id = req.query.campaignId;
        const data = await Campaign.findByIdAndRemove(id);
        if (!data) {
            res.status(404).send({
                message: "campaign  not found"
            });
        }
        res.status(200).send({
            message : "campaign deleted succesfully",
            site : data
        })
    } catch (error) {
        res.status(400).send({
            message : error.message,
            stack : error.stack
        })
    }
}

const editCampaign = async(req,res)=>{
    try {
        const id = req.query.campaignId;
        const payload = req.body.payload;
        const data = await Campaign.findByIdAndUpdate(id,payload);
        if (!data) {
            res.status(404).send({
                message: "campaign  not found"
            });
        }
        res.status(200).send({
            message : "campaign updated succesfully",
            site : data
        })
    } catch (error) {
        res.status(400).send({
            message : error.message,
            stack : error.stack
        })
    }
}

module.exports = {
createCampaign,
getCampaign,
deleteCampaign,
editCampaign

}