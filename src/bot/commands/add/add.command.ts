import { SlashCommandPipe } from '@discord-nestjs/common';
import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { AddOptions } from './add.options';

@Command({
  name: 'add',
  description: 'Dodaj slowo ze znaczeniem',
})
@Injectable()
export class AddCommand {
  @Handler()
  onAdd(@InteractionEvent(SlashCommandPipe) options: AddOptions): string {
    return 'test';
  }
}
