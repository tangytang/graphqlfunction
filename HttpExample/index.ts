import { Client } from "@microsoft/microsoft-graph-client";
import axios from "axios";
import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { getMessage } from "./api";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const acc = await axios.get(
    "https://papajohnsassets.blob.core.windows.net/newcontainer/accesstoken.txt"
  );
  const authProvider = (callback) => {
    callback(Error, acc.data);
  };
  const options = {
    authProvider,
  };

  const client = Client.init(options);
  const message = await getMessage(client);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      message,
    },
  };
};

export default httpTrigger;