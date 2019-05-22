'use strict';

const s3Service = require ('./service/s3Service')
module.exports.upload = async  (event) => {
 s3Service.upload(event.body)
  return {
   statusCode: 200,
   body: JSON.stringify({
     message: 'Go Serverless',
     input: event,
   }),
  }
 }