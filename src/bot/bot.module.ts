import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './gateways/bot.gateway';
import { InfoCommand } from './commands/info/info.command';
import { AddCommand } from './commands/add/add.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, InfoCommand, AddCommand],
})
export class BotModule {}
