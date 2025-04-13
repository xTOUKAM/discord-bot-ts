"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.InteractionCreate,
    once: false,
    async execute(interaction) {
        // Vérifie si l'interaction est une commande de type Chat Input
        if (!interaction.isChatInputCommand())
            return;
        // Récupération de la commande correspondante
        const command = interaction.client.slashCommands.get(interaction.commandName);
        if (!command) {
            // Réponse pour une commande inexistante
            await interaction.reply({
                content: 'This command does not exist',
                ephemeral: true,
            });
            return;
        }
        // Exécution de la commande
        await command.execute(interaction);
    },
};
exports.default = event;
