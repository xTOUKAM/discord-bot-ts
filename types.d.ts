import { Collection, CommandInteraction, SlashCommandBuilder } from 'discord.js';

// Ajout des types pour les variables d'environnement globales
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string;
            TOKEN: string;
        }
    }
}

// Extension du Client de discord.js pour inclure slashCommands
declare module 'discord.js' {
    interface Client {
        slashCommands: Collection<string, SlashCommand>;
    }
}

// Interface pour les événements du bot
export interface BotEvent {
    name: string;
    once?: boolean; // false par défaut, inutile de le préciser explicitement
    execute: (...args: unknown[]) => Promise<void>; // Préférable à any[]
}

// Interface pour les commandes slash
export interface SlashCommand {
    name: string;
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

export {};