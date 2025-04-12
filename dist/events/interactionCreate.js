"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.InteractionCreate,
    once: false,
    async execute(interaction) {
        if (!interaction.isChatInputCommand())
            return;
        const command = interaction.client.slashCommands.get(interaction.commandName);
        if (!command) {
            await interaction.reply({ content: "This command does not exist", ephemeral: true });
            return;
        }
        await command.execute(interaction);
    }
};
exports.default = event;
