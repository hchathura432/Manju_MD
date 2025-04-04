module.exports = {
    name: "alive",
    description: "Check if the bot is alive",
    execute(client, message, args) {
        const response = "✅ *I'm alive and running smoothly!* 🚀";
        client.sendMessage(message.chatId, response);
    }
};
