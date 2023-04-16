import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscordModule } from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';

import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev',
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.SQLITE_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.DISCORD_TOKEN,
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds],
        },
      }),
    }),
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
