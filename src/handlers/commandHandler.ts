import { Client, REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { SlashCommand } from '../../types';

module.exports = async (client: Client) => {
    const slashCommandsDir = join(__dirname, '../slashCommands');
    const commands = readdirSync(slashCommandsDir)
        .filter(file => file.endsWith('.js'))
        .map(file => {
            const { command }: { command: SlashCommand } = require(join(slashCommandsDir, file));
            client.slashCommands.set(command.name, command);
            return command.data.toJSON();
        });

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    } catch (error) {
        console.error(error);
    }
};