import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import {
  CommandInteraction,
  EmbedBuilder,
  InteractionReplyOptions,
} from 'discord.js';

@Command({
  name: 'ping',
  description: 'Ping command for slowink-polkowicki-bot',
})
@Injectable()
export class PingCommand {
  @Handler()
  onPing(interaction: CommandInteraction): InteractionReplyOptions {
    
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor({
        name: 'Some name',
        iconURL: 'https://i.imgur.com/AfFp7pu.png',
        url: 'https://discord.js.org',
      })
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addFields({
        name: 'Inline field title',
        value: 'Some value here',
        inline: true,
      })
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter({
        text: 'Some footer text here',
        iconURL: 'https://i.imgur.com/AfFp7pu.png',
      });

    return {
      embeds: [exampleEmbed],
    };
  }
}
