const fs = require("fs");

module.exports = {
  config: {
    name: "listfile",
    aliases: ["lf"],
    version: 1.0,
    author: "LiANE",
    shortDescription: { en: "List all files in the same directory as the bot." },
    longDescription: { en: "This command lists all the files in the same directory as the bot." },
    category: "Utility",
    guide: { en: "{prefix}listfile - to list all files" }
  },
  onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData }) {
    const fileDir = __dirname;
    const files = fs.readdirSync(fileDir);

    let list = "```";
    for (const file of files) {
      list += `${file}\n`;
    }
    list += "```";

    message.reply(list);
  }
};