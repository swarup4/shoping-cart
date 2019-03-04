let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

let product = {
    _id: { type: objectId, auto: true },
    type: { type: String, required: true },
    name: [{ type: String, required: true }],
    price: { type: Date, required: true },
    category: { type: Number, required: true },
    availability: { type: Boolean, require: true },
    availabilityQuantity: { type: Number, require: true }
}
let productSchema = new Schema(product, { versionKey: false });
let products = mongoose.model("menu", productSchema);

module.exports = products;