// domain/.netlify/functions/1-hello

const name = {name: 'john'}

exports.handler = async (event, context) => {
 return {
  statusCode: 200,
  body: 'New New example'
 }
}