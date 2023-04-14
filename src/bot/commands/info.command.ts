import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import {
  CommandInteraction,
  InteractionReplyOptions,
  EmbedBuilder,
} from 'discord.js';

@Command({
  name: 'info',
  description: 'Describes all commands for slownik-polkowicki-bot',
})
@Injectable()
export class InfoCommand {
  @Handler()
  onInfo(interaction: CommandInteraction): InteractionReplyOptions {

    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('slowink-polkowicki-bot')
      .setURL('https://github.com/perfringis/dictionary-discord-bot')
      .setDescription('Slownik polkowicki to encyklopedia neologizmow(nowomowy), ktore zostaly sworzone w pewnej mordowni(firmie) na S. Autorem wiekszosci neologizmow jest Xubo. Slownik jest trzecim nawazniejszym dokumentem w polsce po gwarze slaskiej oraz jezyku kaszubskim. Zbior zawiera definicje wraz z kompleksowym wyjasnieniem. Proba rekonstrukcji definicji przypada na 2019 do 2023.')
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
