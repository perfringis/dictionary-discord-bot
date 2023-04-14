import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './bot.gateway';
import { PingCommand } from './commands/ping.command';
import { InfoCommand } from './commands/info.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, PingCommand, InfoCommand],
})
export class BotModule {}
