const mongoose = require("mongoose");

const schema = new mongoose.Schema({ vin: String, status: String });
const VehicleDetail = mongoose.model(
  "vehicleDetails",
  schema,
  "vehicleDetails"
);

module.exports = { VehicleDetail };
