import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import {
  InteractionReplyOptions,
  EmbedBuilder,
  CommandInteraction,
} from 'discord.js';
import { DictionaryService } from 'src/services/dictionary.service';

@Command({
  name: 'get',
  description: 'Wez losowa definicje',
})
@Injectable()
export class GetCommand {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Handler()
  async onGet(
    @InteractionEvent() interaction: CommandInteraction,
  ): Promise<void> {
    const dictionary = await this.dictionaryService.getRandomWord();

    const embedInfo = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(dictionary.word)
      .setDescription(dictionary.meaning)
      .setThumbnail('https://avatars.githubusercontent.com/u/9162152');

    await interaction.reply({
      embeds: [embedInfo],
    });
  }
}
