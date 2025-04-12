import { ActivityType, Client, Events } from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    async execute(client: Client) {
        console.log(`Logged in as ${client.user?.tag}`);
        client.user?.setActivity("It's time to code", { type: ActivityType.Playing });
        client.user?.setStatus("online");
    }
};

export default event;