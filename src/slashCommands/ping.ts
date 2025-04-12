import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../../types";
import { EmbedBuilder } from "@discordjs/builders";

export const command: SlashCommand = {
    name: "ping",
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor(0x00FF00)
                .setTitle("Pong!")
                .setDescription("🏓 Pong!")
                .setTimestamp()
                .setFooter({ text: `Pinged by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
                .setThumbnail(interaction.user.displayAvatarURL())
                .setImage(interaction.user.displayAvatarURL())
                .setURL(interaction.user.displayAvatarURL())
                .setFields([
                    { name: "Ping", value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true },
                    { name: "API Latency", value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true }
                ])
            ]
        });
    }
}