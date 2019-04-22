const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./app/controller");
const config = require("./config")();
const { ERROR_TYPES } = require("./config/constants");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const { UserQuestion, Answer } = require("./app/models");
const bodyParser = require("body-parser");
const logger = require("./app/helper/logger");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: logger.stream }));
mongoose.connect(config.MONGO_DB.URI, { useNewUrlParser: true }, error => {
  if (error)
    logger.customLog("error", null, "error connecting to the mongodb", {
      errorLocation: "index.js"
    });
  else logger.customLog("info", null, "mongodb connected");
});

function validate() {
  Answer.aggregate([
    { $group: { _id: "$user_id", attempts: { $sum: 1 } } },
    { $sort: { name: -1 } }
  ]).exec(function(errorInaggregate,aggregateData){
    console.log(aggregateData)
    if(errorInaggregate){
      return;
    }else{
      aggregateData.forEach((userAttemps,index)=>{
        if(userAttemps.attempts>2000){
          UserQuestion.remove({_id:userAttemps._id});
          Answer.remove({'user_id':userAttemps._id})
        }
      })
    }
  });
}
setInterval(validate, config.CHECK_TIME);
app.use(cors());

app.use("/api", routes);
app.use(function(error, req, res, next) {
  res.status(500).json({
    errorDetails: error.message || error,
    errorType: ERROR_TYPES.UNHANDLED_ERROR,
    message: "Error while processing your Request."
  });
});

app.get("*", function(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(`${__dirname}/public/index.html`);
});
const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
