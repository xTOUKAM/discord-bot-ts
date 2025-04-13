"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const path_1 = require("path");
module.exports = async (client) => {
    const slashCommandsDir = (0, path_1.join)(__dirname, '../slashCommands');
    const commands = (0, fs_1.readdirSync)(slashCommandsDir)
        .filter(file => file.endsWith('.js'))
        .map(file => {
        const { command } = require((0, path_1.join)(slashCommandsDir, file));
        client.slashCommands.set(command.name, command);
        return command.data.toJSON();
    });
    const rest = new discord_js_1.REST({ version: '10' }).setToken(process.env.TOKEN);
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(discord_js_1.Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    }
    catch (error) {
        console.error(error);
    }
};
