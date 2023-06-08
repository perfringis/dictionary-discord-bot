import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { AttachmentBuilder, CommandInteraction } from 'discord.js';

@Command({
  name: 'dump',
  description: 'Zwraca dump bazy danych',
})
@Injectable()
export class DumpCommand {
  @Handler()
  async onDump(
    @InteractionEvent() interaction: CommandInteraction,
  ): Promise<void> {

    const file = new AttachmentBuilder('database.sqlite');

    await interaction.reply({
      files: [file]
    });
  }
}
