import { messageUrl } from "./urls";

const countReactions = (reactions) =>
  reactions.reduce((sum, reaction) => sum + 1, 0);

export const getMe = async (client: any) => {
  const me = await client.api("/me").get();

  return me;
};

export const getMessage = async (client: any) => {
  const me = await getMe(client);
  const myId = me.id;
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