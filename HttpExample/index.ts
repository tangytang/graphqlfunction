import { Client } from "@microsoft/microsoft-graph-client";
import axios from "axios";
import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { getMessage } from "./api";

const axios = require('axios')

const access = async () => {
  let token 
  try {
    token = await axios.get('https://accesstokengenerator111.azurewebsites.net/api/accesstokengenerator')
  } catch (err) {
    console.log('failed to fetch token')
  }
  return 
}

=======
>>>>>>> dev
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);
  const message = await getMessage();

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      message,
    },
  };
};

export default httpTrigger;