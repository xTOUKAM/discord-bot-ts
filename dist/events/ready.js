"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Logged in as ${client.user?.tag}`);
        client.user?.setActivity("It's time to code", { type: discord_js_1.ActivityType.Playing });
        client.user?.setStatus("online");
    }
};
exports.default = event;
