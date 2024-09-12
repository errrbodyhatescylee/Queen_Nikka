//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "27736297296";
global.owner = process.env.OWNER_NUMBER || "27749655420";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JGWHozN0tTL3F4d1ZPME1wRlArOGxvUk5qL1k5ZlU3Qnd0WHFkUjhtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjA2b01Vc3ZEQnU5VHlWTHE5cittbjhjYXdHT3hrbGs0L0VrWEdvZjEwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTGQwMnBDQlZ2MTVZdGQ5Zm1jTmd4dFk5SEw0QS9CN21zRlkvaVQvRVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMENESFk2R3REUHJhUkFTeWoza3V6dHJ5MlczcE1oa2YrVDZPRHhDKzNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMbEJnM0tUei9ETXNzTHZCM2YwUUhxMkJzdXFvazBOeXJLSE13NDRHSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpXRWx0NE4xNzloUm9BbHdlaVo5Y1BmdThoczFESTJNUmlOWDFnbUR0RUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdUaDczUzkva2Z6cjZNa216dzJtVkc2L0VIelYwWW42WHZsbUltalAwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDRzMjV2M3hJdDZoNTM4eVhxeFhWa2hwckEvSTlIZ1ZaWm10SzhVQnNUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpweXhDNzIrK2ZLQVAwM1VQa0JtRUdKS1hMOHFtdmF3VFdObGRTSHVpKzJ4Y0JhUDNIdFRVeGRlb2V1UjAydTNuUENTT1lOOGZobzVxU3JqYy81aUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiIvYzEwNmhNQVRFN0w4ZmJwNzI1WlFpYVl0dGtpT3R0M0dyRmFKeHl5Y2xFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzQ5NjU1NDIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3NjM0Njg0MzUzQjAxNUVCRDg3RDA1ODE0MERGOUQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYxMzA0Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NzQ5NjU1NDIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE5OUMzRDNCNzJBRUYzN0Q1MzkxNENCRTUzOUUyQUQ1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYxMzA0Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRCc3FSLVUxU3JpSGUzRXZLeFNNdmciLCJwaG9uZUlkIjoiYWI2YjYzNDItMDQ2My00ZmMyLWE5NDYtZTVhOWMwNjc5MWRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im04T1hHT2JaajRlNHZRS3pKNHI3T1RsY2VXOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bTdzbXBuS3g1RjMvZHh2VThVVExDWVJndFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVE1XWjRWQVkiLCJtZSI6eyJpZCI6IjI3NzQ5NjU1NDIwOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3lsZWUgRGVtb24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhVzRzc0hFUGJSaXJjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNZaTVFMkpIVWs4K1pKZEdubzlXWTBtMWUraWFiU1JFZTlnNFFMYlVmUjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjI3RXlJMFo4cjRBbHFWQ1NRa0pvdDNsWGpyVUtlK2RFcndEczZWUWdXZjRjQm9iVTRvS25ETXExc0g3V2RHb3JQV2I4UG5ENFZZSHNhcFRhdFBtREN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjeW15NmsxVVA4b2t2dkZ2NldZcFNKSG5HYjNOa1UxRytkWjkrRWh3TGwrU0VKTi9LUC90ekwydFBXMk9tbUlGbmw2clhINEY4bklISWtWQmtRckVEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzQ5NjU1NDIwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEdJdVJOaVIxSlBQbVNYUnA2UFZtTkp0WHZvbW0wa1JIdllPRUMyMUgwZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjEzMDQzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOUEEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "powered by Cylee Demon",
  author: process.env.PACK_AUTHER || "Cylee_Demon",
  packname: process.env.PACK_NAME || "C Y L E E",
  botname: process.env.BOT_NAME || "theCyleeDemon",
  ownername: process.env.OWNER_NAME || "Cylee",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
