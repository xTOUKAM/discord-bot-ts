"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
exports.command = {
    name: "ping",
    data: new discord_js_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new builders_1.EmbedBuilder()
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
};
