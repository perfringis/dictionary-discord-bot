import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './gateways/bot.gateway';
import { InfoCommand } from './commands/info/info.command';
import { AddCommand } from './commands/add/add.command';
import { DictionaryService } from '../services/dictionary.service';
import { DictionaryEntity } from '../entities/dictionary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetCommand } from './commands/get/get.command';

@Module({
  imports: [TypeOrmModule.forFeature([DictionaryEntity]), DiscordModule.forFeature()],
  providers: [
    BotGateway,
    InfoCommand,
    AddCommand,
    GetCommand,
    DictionaryService,
  ],
})
export class BotModule {}
