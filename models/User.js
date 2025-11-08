import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        profilePicture: { type: String },
        coverPicture: { type: String },
        stripeId: { type: String },
        stripeSecret: { type: String },
    },
    { timestamps: true
    }
)
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
