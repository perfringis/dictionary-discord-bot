import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './gateways/bot.gateway';
import { InfoCommand } from './commands/info/info.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, InfoCommand],
})
export class BotModule {}
