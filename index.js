'use strict';

const friendsModel = require('./schema.js');

const uuid = require('uuid').v4

exports.handler = async (event) => {
  console.log(event)
  
  try {

    const id = event.queryStringParameters.id

    await friendsModel.delete({"id": id})
    const strigifiedId = JSON.stringify(id)

    return {
      statusCode: 201,
      body: `ID: ${strigifiedId} has been deleted`
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}