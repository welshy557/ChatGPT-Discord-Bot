import { ChatGPTAPI } from "chatgpt";
import * as dotenv from "dotenv";
dotenv.config();

export default async function request(input: string) {
  if (!process.env.CHATGPT_TOKEN) {
    throw new Error("No Session Token");
  }

  const api = new ChatGPTAPI({
    sessionToken: process.env.CHATGPT_TOKEN,
  });

  // ensure the API is properly authenticated
  await api.ensureAuth();

  // send a message and wait for the response
  return await api.sendMessage(input);
}
