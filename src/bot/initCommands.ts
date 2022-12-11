import { REST, Routes, SlashCommandBuilder } from "discord.js";

import * as dotenv from "dotenv";
dotenv.config();

export default async function initCommands() {
  const token = process.env.Bot_TOKEN;
  const clientId = process.env.ClIENT_ID;

  if (!token) throw new Error("No Token");
  if (!clientId) throw new Error("No Client ID");

  const commands: Omit<
    SlashCommandBuilder,
    "addSubcommand" | "addSubcommandGroup"
  >[] = [];

  commands.push(
    new SlashCommandBuilder()
      .setName("chat")
      .setDescription("Make a request to ChatGPT AI")
      .addStringOption((option) =>
        option.setName("input").setDescription("Input to send to ChatGPT AI")
      )
  );

  const rest = new REST({ version: "10" }).setToken(token);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
