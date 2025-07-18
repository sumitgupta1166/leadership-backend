import mongoose from "mongoose";

const ClaimHistorySchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    points:{
        type:Number,
        
    },
    claimedAt:{
        type: Date,
        default: Date.now
    },
},{timestamps:true});

const ClaimHistory = mongoose.model("ClaimHistory", ClaimHistorySchema);
export default ClaimHistory;