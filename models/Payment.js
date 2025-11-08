import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        amount: { type: Number, required: true },
        oid: { type: String, required: true, unique: true },
        from: { type: String, required: true },
        to: { type: String, required: true },
        name: { type: String ,required: true,maxlength: 50 },
        message: { type: String , default: "",maxlength: 100},
        isdone: { type: Boolean, default: false },
 
    },
    { timestamps: true
    }
)

const Paymentnew = mongoose.models.Paymentnew || mongoose.model("Paymentnew", PaymentSchema);

export default Paymentnew;