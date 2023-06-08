import { SlashCommandPipe } from '@discord-nestjs/common';
import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { CorrectOptions } from './correct.options';
import { DictionaryService } from 'src/services/dictionary.service';
import { DictionaryDto } from 'src/dto/dictionary.dto';
import { CommandInteraction } from 'discord.js';

@Command({
  name: 'correct',
  description: 'Aktualizuj znaczenie',
})
@Injectable()
export class CorrectCommand {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Handler()
  async onCorrect(
    @InteractionEvent(SlashCommandPipe) options: CorrectOptions,
    @InteractionEvent() interaction: CommandInteraction,
  ): Promise<void> {
    const updated = await this.dictionaryService.update(
      new DictionaryDto(options.word, options.meaning),
    );

    if (!updated.affected) {
      await interaction.reply({
        content: 'Aktualizowanie definicji nie powiodło się!',
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: 'Zaktualizowano definicję!',
        ephemeral: true,
      });
    }
  }
}
