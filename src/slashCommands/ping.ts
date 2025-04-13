import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { SlashCommand } from '../../types';

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute: async (interaction) => {
        const embed = new EmbedBuilder()
            .setColor(0x00ff00)
            .setTitle('🏓 Pong!')
            .setDescription('Check out the latency details below:')
            .addFields(
                { name: 'Ping', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true },
                { name: 'API Latency', value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true }
            )
            .setFooter({ text: `Pinged by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};