import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './gateways/bot.gateway';
import { WordCommand } from './commands/word/word.command';
import { InfoCommand } from './commands/word/info/info.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, WordCommand, InfoCommand],
})
export class BotModule {}
