import { Client, GatewayIntentBits } from "discord.js";
import initCommands from "./initCommands.js";
import request from "../ChatGPT/api.js";
import * as dotenv from "dotenv";
import { EmbedBuilder } from "@discordjs/builders";

dotenv.config();
initCommands();

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("No Token");
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "chat") {
    await interaction.deferReply();

    const input = interaction.options.data[0].value as string;

    const response = await request(input);

    const embed: EmbedBuilder = new EmbedBuilder()
      .setColor([147, 112, 219])
      .setAuthor({
        name: "ChatGPT",
      })
      .setDescription("ChatGPT Response")
      .addFields({ name: "Response:", value: response, inline: false });

    interaction.editReply({ embeds: [embed] });
  }
});

client.login(token);
