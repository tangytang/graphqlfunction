import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { getMessage } from "./api";

const axios = require('axios')

const access = async () => {
  let token 
  try {
    token = await axios.get('https://accesstokengenerator111.azurewebsites.net/api/accesstokengenerator')
    console.log('token response', token.data)
    return token.data
  } catch (err) {
    console.log('failed to fetch token')
  }
}

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);
  const message = await getMessage(access());

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      message,
    },
  };
};

export default httpTrigger;
