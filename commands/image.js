var Scraper = require('images-scraper')

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image',
    aliases: ['i'],
    cooldown: 0,
    permissions: ['ATTACH_FILES'],
    description: ' This sends an image to a discord text channel',
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}