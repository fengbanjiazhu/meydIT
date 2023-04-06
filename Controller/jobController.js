const Job = require("../Modal/jobModal");
const catchAsync = require("../utils/catchAsync");

exports.getAllJob = catchAsync(async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json({
    status: "success",
    data: {
      jobs,
    },
  });
});

exports.getJob = catchAsync(async (req, res, next) => {
  const id = req.params;
  const job = await Job.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      job,
    },
  });
});

exports.createNewJob = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newJob = await Job.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newJob,
    },
  });
});
