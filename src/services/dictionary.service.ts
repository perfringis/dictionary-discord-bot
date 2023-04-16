import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DictionaryDto } from 'src/dto/dictionary.dto';
import { Dictionary } from 'src/entities/dictionary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly dictionaryRepository: Repository<Dictionary>,
  ) {}

  create(dictionaryDto: DictionaryDto): Promise<Dictionary> {
    return this.dictionaryRepository.save(
      new Dictionary(dictionaryDto.word, dictionaryDto.meaning),
    );
  }
}
