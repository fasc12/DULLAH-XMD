const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUW2+qShj9L/Oqe8tdMWlygCKKgihqpSf7YYABRrk5Myq08b+fYNu0Ocnep4enCTBr1qzL9wrKClM0Ry0Yv4Ka4AtkqFuytkZgDPRzkiAC+iCGDIIxOC7FOAk2pCgFCJ9Nj9vvB1zbCq4pUfO4fgm31mS71ifSLnoAtz6oz2GOoz8AJpvzVFo8au7Gk5PZMjETm3nwUcrWwsj0xUGvYLUi0vZZ5B7ArUOEmOAyNesMFYjAfI5aD2LyPfpz96SPBE62L/bOyltDWTahkHJUI49zRbGXlNsTRTyQk2V+j76fkWx0dRCPRdVKsALN4dRanZ6aaWjWYXLgpihold5my0lv9ClOSxTPYlQyzNpv644NmtRLttVih+YC3jYVFWS/camun6Qq8PkG8UPbe1HN6nvErQSRplhdHb7qDZXwsBNkP5nyo+MptcxdbZQeV+JM2SZp8JW4Rz6ycvw/ukua3MwWhWBohXrobXPqLw8vTwFx+TqZr1ruohuYP6j5ogi+R1+8Mn9/0fY0mxIbXlx5EiTpRixDUXp268CdTVvNTiop0ugnfcjO5E8skyVvnsrGyxJqTZba2uVtGG7nsqAPJ/l8sz8HdXgKy4q49nC2Ou3bCI/0XtoWMHYae9CcDvNkJ7xMHdOBzYpxM05ba+nD/UZH1M5iMOZvfUBQiikjkOGq7N7Jwz6A8cVHEUHsri4Io9WkPbE4MBZCM9kPcLiryqlvrJyBqyZPF65SxMFllu1GwQPog5pUEaIUxVNMWUVaB1EKU0TB+O9ffVCihr351p0m8n2QYELZtjzXeQXjD1M/PsIoqs4l89syMroFImDMfb5GjOEypZ2M5xKSKMMXZGSQUTBOYE7RrQ9idMER6vCAT1U93Jz59VFQhETRWslxq7SjnFXl2y+CiEQhFKQfsiJKPyReEX+EoqT8QBwfJyOVD0cJD/oAv1em2/NbB5fKsr0cyPWslWvPoc5Mcxz/1PPUuXR34U16RFAMxoycUR+EMDqe6011ROUfcEMdI19ejPj5QriqgaPJpsoFVrzmjl9w3ywF49fPMWVUcYc3sU1PW3ky6IPinkB8v7kiDnlVUmVOGY6V0V/057UTEtb1zxKxDvdd9G5HjBjEOQVjYMzaQ6FKE9NZHsoFZ1naKtWMVAOfJn2E/S1NvcJ7esqHlp15j7XtWakh+Lx5PVqrKScefD6BFqkTuTT4e5r+DQLGIN1x8bGw/cWLHXmmPbKO7XU6UrZH9ezzXNR4KZfp0oDO7TxzENxm160ae1OjtwgGcTJ0H4XYXyreU69dB3NJgSOBIaNrxkdYvh72kj+Ta86fdOgshFIW9Muq3qeetIuWpWu6YWaSfeYj9cUMsT5xnXDQSxVxshekdqaUWtbSRwk/H0Tn6qc43qnGPLsaq7ca3sdA/j5+8b0hr+/RSjC6T7MSdhb9lzlfU87d+l8w3ufjb5KkJ/WBz2vU4GBzVfxNU2nsyNaOrR911ZU4theyk7LvPV/ZE7jdfvVBnUOWVKQAYwDLmFQ4Bn2QQ8q0z6JucIEog0UNxvxQVDlOEAWhD4pWq2ufQfbRb6B1j11L4PYPFJIVx/oHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
