import { ActivityType, Client, Events, Interaction } from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction: Interaction) {
        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.slashCommands.get(interaction.commandName);

        if(!command) {
            await interaction.reply({ content: "This command does not exist", ephemeral: true });
            return;
        }

        await command.execute(interaction);
    }
};

export default event;