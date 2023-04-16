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
