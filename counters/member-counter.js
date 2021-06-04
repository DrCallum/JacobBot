module.exports = async (client) => {
    const guild = await client.guilds.fetch("811381300685701140");
    setInterval(async () => {
     const memberCount = guild.memberCount;
     const channel = await client.channels.fetch('845399697942511636')
       channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
       console.log("updating Member Count");
   }, 180000);
 };