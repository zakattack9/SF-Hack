const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

module.exports.getReports = (event, context, callback) => {
  var dynamoParams = {
    TableName: 'PowerOutageReports',
    FilterExpression: '#time BETWEEN :date1 AND :date2',
    ExpressionAttributeNames: {
      '#time': 'time'
    },
    ExpressionAttributeValues: {
      ":date1": {
        "S": "2019-07-18T18:38:44.238Z"
      },
      ":date2": {
        "S": new Date().toISOString()
      }
    }
  };

  dynamodb.scan(dynamoParams, (err, data) => {
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