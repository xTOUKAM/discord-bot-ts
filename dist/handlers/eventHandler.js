"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
module.exports = (client) => {
    const eventsDir = (0, path_1.join)(__dirname, '../events');
    (0, fs_1.readdirSync)(eventsDir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
        const { default: event } = require((0, path_1.join)(eventsDir, file));
        const handler = (...args) => event.execute(...args);
        event.once ? client.once(event.name, handler) : client.on(event.name, handler);
        console.log(`Event ${event.name} loaded`);
    });
};
