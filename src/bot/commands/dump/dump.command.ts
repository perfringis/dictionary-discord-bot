import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'dump',
  description: 'Zwraca plik CSV z aktualnym stanem definicji',
})
@Injectable()
export class DumpCommand {
  @Handler()
  onDump(): string {
    return 'TODO';
  }
}
