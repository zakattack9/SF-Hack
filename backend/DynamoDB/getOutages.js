const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

module.exports.sendReport = (event, context, callback) => {
  console.log("hello", event.body);
  let { time, city, description, location } = JSON.parse(event.body);
  console.log(time, city, description, location);

  var dynamoParams = {
    Item: {
      "time": {
        S: time
      },
      "city": {
        S: city
      },
      "description": {
        S: description
      },
      "location": {
        S: location
      }
    },
    TableName: "PowerOutageReports"
  };

  dynamodb.putItem(dynamoParams, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      const response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(err.stack)
      }
      callback(null, response);
    } else {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(data)
      }
      callback(null, response);
    }
  });

};