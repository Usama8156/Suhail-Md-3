const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_51_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWN2cWpKYXEvaGJRUTR0aHFJazFGM2d6N2NRQW82cFA4czIrV25veHBCbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidTdnek5SQ21SeHlUVE9meDJUNUVIUVwiLFxuICBcInBob25lSWRcIjogXCJhODFhZTc0MC0wZTZmLTQzYTctOTQ4Zi00YWU3ZWE5M2MwY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAyMjIsXG4gICAgICA4LFxuICAgICAgMTE0LFxuICAgICAgMTg0LFxuICAgICAgNTEsXG4gICAgICA1NCxcbiAgICAgIDIwMyxcbiAgICAgIDg4LFxuICAgICAgMTIsXG4gICAgICAxMTksXG4gICAgICA5MCxcbiAgICAgIDEyNCxcbiAgICAgIDksXG4gICAgICAyMjEsXG4gICAgICA4MyxcbiAgICAgIDE5OCxcbiAgICAgIDI2LFxuICAgICAgMjAxLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgOTEsXG4gICAgICAxMTMsXG4gICAgICAxMTQsXG4gICAgICAxMjQsXG4gICAgICAxNDUsXG4gICAgICAyMDAsXG4gICAgICA5NixcbiAgICAgIDU3LFxuICAgICAgMTUsXG4gICAgICA3LFxuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICAyMzAsXG4gICAgICAzNixcbiAgICAgIDIxOCxcbiAgICAgIDQ1LFxuICAgICAgMjQsXG4gICAgICAzNSxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piWDI2Z0NFT3l0c2NJR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFZDZkdxSkFxV2tFdUdNZkdtbm4wdm0vMVZMSEpQby9tWFJnTzZBRXhUWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzbHBqZnp6akdOZUZNR0JmWmxDSlRTcXNrU3VqcEl4L3R3a0tyNTRuNzNNQ0lzejYyc0JHM3IwU2k0bDdkdFpXUVorRHh1YnlNWnFFUndpRkpGM3lCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqcTVEWXVXK3RCQ0YvVis4SGV1Skh6WG5uWTkxNzl3S0g0V1E2aXhldTN3Nzl1T3JDMDZ3azFVdUppOGRsMFRmV3huUW5sdmhycitXQXRjNDNQZ01oQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ2NzI2NDA1NjYwOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzI2OTc4OTY3ODM5ODE6MjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NjcyNjQwNTY2MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5ODMzNDU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlIrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwbWYwZWRFN1ZNVHpWZHAxbHFnclFFWFFFdjlIRWJyZDRhb3pzZ0hYT1k0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyMjI1OTA5NCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlI5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidEVxZTQ1dW9FaFJUWncxVElEMzRLS2tyYnZLU0RKcjVyMC94eTdBQndlYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjIyNTkwOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpSX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuZUxpY2dwRWJwY3FpYXJNMjgwTk95YjhQOEZCNEh2OVd1aGcwUG9Sd0ZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyMjI1OTA5NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlNBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejhJcUxqY2Z1STFSSlJpUkM1MlFSaFVtUmZSSnJnbkVOemNsT1FCdW1mVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjIyNTkwOTQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpTQi5qc29uIjogIntcImtleURhdGFcIjpcIkk1L3M3a3ZiN3BWNlh5QTdkS2ZhTzgrQWhjUXJGNjdQS09iOWV1dEd4ZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjIyMjU5MDk0LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpTQy5qc29uIjogIntcImtleURhdGFcIjpcIjRwQmR0ZnFOVlpkVFIvSGhIdVZ4T041TDVOMTF6NDNvc2FCdXdqQjNDUmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjIyMjU5MDk0LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKU0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5SFpWU0w4c0U3MW1nRFFJTFFsOUJyTXg5eU1DQk1lUEhnSXgwMTRabGprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyMjI1OTA5NCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzQ5ODMzMTI0MDU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
