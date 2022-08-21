import {
  AuthProvider,
  AuthProviderCallback,
  Client,
  Options,
} from "@microsoft/microsoft-graph-client";
import { messageUrl } from "./urls";


export const getMessage = async (token) => {

  const authProvider: AuthProvider = (callback: AuthProviderCallback) => {
    callback(Error, token);
  };
  const options: Options = {
    authProvider,
  };
  const client = Client.init(options);

  // GET personal details from Graph API

  const myId = "cdbca21b-29d8-4de4-80da-1f5151d4df81"

  // Interacting with the Graph APi
  
  const countReactions = (reactions) =>
    reactions.reduce((sum, reaction) => sum + 1, 0);
  
  
  const messageData = await client.api(messageUrl).get();

  const filteredMessages = messageData.value.filter(
    ({ reactions }) =>
      !reactions.some((reaction) => reaction.user.user.id === myId)
  );

  const sortedMessages = filteredMessages.sort(
    (a, b) => countReactions(b.reactions) - countReactions(a.reactions)
  );

  return sortedMessages.length > 0 ? sortedMessages[0] : null;
};
