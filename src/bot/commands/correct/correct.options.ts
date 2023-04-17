import { Param, ParamType } from '@discord-nestjs/core';

export class CorrectOptions {
  @Param({ description: 'slowo', required: true, type: ParamType.STRING })
  word: string;

  @Param({ description: 'znaczenie', required: true, type: ParamType.STRING })
  meaning: string;
}
