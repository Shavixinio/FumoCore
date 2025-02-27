const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows all available commands'),

        async execute (interaction) {
            await interaction.reply({content: "test", ephermal: true});
        }
}