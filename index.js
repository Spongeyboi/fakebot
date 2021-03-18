require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client();

const express = require("express")
const app = express().get("/",(s,q)=>q.send("OK")).listen(3000)

client.on("message",msg=>{
	if (msg.author.bot) return;
	if (msg.author.id != process.env.ownerid) return;
	const prefix = process.env.prefix
	
	var m = msg.content.slice(prefix.length).trim().split(/ +/)
	var cmd = m.shift()
	
	if (!msg.content.startsWith(prefix))return;
	
	if (cmd==="s"){
		msg.channel.send(m.join(" ")).catch(console.error);
		msg.delete().catch(console.error)
	}
	if (cmd==="help"){
		msg.reply("what do you need help with?")
	}
})

client.login(process.env.token).catch(console.error);