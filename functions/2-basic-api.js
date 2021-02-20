const items = require('../assets/data')

exports.handler = async (event, context) => {
 return {
  headers:{
   'Access-Control-Allow-Origin': '*'
  },
  statusCode: 202,
  body: JSON.stringify(items),
 }
}