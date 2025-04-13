import { Events, Interaction } from 'discord.js';
import { BotEvent } from '../../types';

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction: Interaction) {
        // Vérifie si l'interaction est une commande de type Chat Input
        if (!interaction.isChatInputCommand()) return;

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

export default event;