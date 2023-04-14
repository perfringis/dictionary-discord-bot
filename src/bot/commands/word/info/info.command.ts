import { Handler, SubCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { InteractionReplyOptions, EmbedBuilder } from 'discord.js';

@SubCommand({
  name: 'info',
  description: 'Co to jest slownik-polkowicki-bot?',
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
        `Slownik polkowicki to encyklopedia neologizmow(nowomowy), ktore zostaly sworzone w pewnej mordowni(firmie) na S. Autorem wiekszosci neologizmow jest Xubo. Slownik jest trzecim nawazniejszym dokumentem w polsce po gwarze slaskiej oraz jezyku kaszubskim. Zbior zawiera definicje wraz z kompleksowym wyjasnieniem. Proba rekonstrukcji definicji przypada na 2019 do 2023.`,
      )
      .setThumbnail('https://avatars.githubusercontent.com/u/9162152')
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
