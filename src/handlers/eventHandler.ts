import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { BotEvent } from '../../types';

module.exports = (client: Client) => {
    const eventsDir = join(__dirname, '../events');
    
    readdirSync(eventsDir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const { default: event }: { default: BotEvent } = require(join(eventsDir, file));
            const handler = (...args: unknown[]) => event.execute(...args);
            
            event.once ? client.once(event.name, handler) : client.on(event.name, handler);
            console.log(`Event ${event.name} loaded`);
        });
};