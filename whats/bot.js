const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth({ dataPath: './bot/auth' })
});

const GROUP_ID = '120363422551337361@g.us';

client.on('ready', async () => {
    const status = process.argv[2];

    if (status === 'on') {
        await client.sendMessage(GROUP_ID, '🟢 *Servidor Minecraft ONLINE!*');
    }

    if (status === 'off') {
        await client.sendMessage(GROUP_ID, '🔴 *Servidor Minecraft OFFLINE!*');
    }

    process.exit(0);
});

client.initialize();
