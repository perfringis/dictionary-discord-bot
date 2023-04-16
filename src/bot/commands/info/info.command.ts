import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { InteractionReplyOptions, EmbedBuilder } from 'discord.js';

@Command({
  name: 'info',
  description: 'Informacje o slownik-polkowicki-bot',
})
@Injectable()
export class InfoCommand {
  @Handler()
  onInfo(): InteractionReplyOptions {
    const embedInfo = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('slowink-polkowicki-bot')
      .setURL('https://github.com/perfringis/dictionary-discord-bot')
      .setDescription(
        `Slownik polkowicki to encyklopedia neologizmow(nowomowy), ktore zostaly sworzone w pewnej mordowni(firmie) na S. Autorem wiekszosci neologizmow jest Xubo. Slownik jest trzecim nawazniejszym dokumentem w Polsce po gwarze slaskiej oraz jezyku kaszubskim. Zbior zawiera definicje wraz z kompleksowym wyjasnieniem. Proba rekonstrukcji definicji przypada na 2019 do 2023.`,
      )
      .setThumbnail('https://avatars.githubusercontent.com/u/9162152')
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Chcesz pomoc?', value: 'https://github.com/perfringis/dictionary-discord-bot', inline: true },
      )
      .setImage('https://avatars.githubusercontent.com/u/9162152')
      .setTimestamp()
      .setFooter({
        text: 'slowink-polkowicki-bot',
        iconURL: 'https://avatars.githubusercontent.com/u/9162152',
      });

    return {
      embeds: [embedInfo],
    };
  }
}
