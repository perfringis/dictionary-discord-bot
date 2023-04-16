import { SlashCommandPipe } from '@discord-nestjs/common';
import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { AddOptions } from './add.options';
import { DictionaryService } from 'src/services/dictionary.service';
import { DictionaryDto } from 'src/dto/dictionary.dto';
import { CommandInteraction } from 'discord.js';

@Command({
  name: 'add',
  description: 'Dodaj slowo ze znaczeniem',
})
@Injectable()
export class AddCommand {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Handler()
  async onAdd(
    @InteractionEvent(SlashCommandPipe) options: AddOptions,
    @InteractionEvent() interaction: CommandInteraction,
  ): Promise<void> {
    // const embedInfo = new EmbedBuilder()
    //   .setColor(0x0099ff)
    //   .setTitle('slowink-polkowicki-bot')
    //   .setDescription(
    //     `Slownik polkowicki to encyklopedia neologizmow(nowomowy), ktore zostaly sworzone w pewnej mordowni(firmie) na S. Autorem wiekszosci neologizmow jest Xubo. Slownik jest trzecim nawazniejszym dokumentem w Polsce po gwarze slaskiej oraz jezyku kaszubskim. Zbior zawiera definicje wraz z kompleksowym wyjasnieniem. Proba rekonstrukcji definicji przypada na 2019 do 2023.`,
    //   )
    //   .setThumbnail('https://avatars.githubusercontent.com/u/9162152');

    // return {
    //   embeds: [embedInfo],
    // };

    const createdWord = await this.dictionaryService.create(
      new DictionaryDto(options.word, options.meaning),
    );

    if (createdWord) {
      await interaction.reply({
        content: 'Definicja dodana pomyslnie!',
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: 'Definicja nie zostala utworzona!',
        ephemeral: true,
      });
    }
  }
}
