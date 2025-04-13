"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'ping',
    data: new discord_js_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute: async (interaction) => {
        const embed = new discord_js_1.EmbedBuilder()
            .setColor(0x00ff00)
            .setTitle('🏓 Pong!')
            .setDescription('Check out the latency details below:')
            .addFields({ name: 'Ping', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true }, { name: 'API Latency', value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true })
            .setFooter({ text: `Pinged by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};
