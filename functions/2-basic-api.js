const items = require('../assets/data')

exports.handler = async (event, context) => {
 return {
  statusCode: 202,
  body: JSON.stringify(items)
 }
}