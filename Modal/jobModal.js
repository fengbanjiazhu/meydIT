const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName must not be empty"],
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    min: 9,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  budget: {
    type: Number,
    default: 0,
  },
  type: {
    enum: [""],
    default: "",
    required: "",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
