let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;
let users = {};


//User Auth Model
let user = {
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contactNo: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    createdDate: Date,
    token: { type: String },
    status: { type: Boolean, default: 1 }
}
let userSchema = new Schema(user, { versionKey: false });
userSchema.pre('save', function(next) {
	// get the current date
	let currentDate = new Date();
	// if created_at doesn't exist, add to that field
    if (!this.createdDate){
        this.createdDate = currentDate;
    }
    next();
});
users.Auth = mongoose.model("user", userSchema);

//User Detals Model
let userDetails = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    profilePics: { data: Buffer, contentType: String },
    wallet: Number,
    gender: String,
    address: String,
    state: String,
    country: String,
    zip: Number,
}

let userDetailsSchema = new Schema(userDetails, { versionKey: false });
users.Details = mongoose.model("userDetails", userDetailsSchema);

//User Profile Pics Model
let userProfilePics = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    profilePics: String,
}

let userPicsSchema = new Schema(userProfilePics, { versionKey: false });
users.ProfilePics = mongoose.model("userProfilePics", userPicsSchema);

module.exports = users;