import { Command, UseGroup } from '@discord-nestjs/core';
import { InfoCommand } from './info/info.command';

@Command({
  name: 'word',
  description: 'word',
  include: [UseGroup({ name: 'type', description: 'Registration type' }, InfoCommand)],
})
export class WordCommand {}
