import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DictionaryDto } from 'src/dto/dictionary.dto';
import { DictionaryEntity } from 'src/entities/dictionary.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(DictionaryEntity)
    private readonly dictionaryRepository: Repository<DictionaryEntity>,
  ) {}

  create(dictionaryDto: DictionaryDto): Promise<DictionaryEntity> {
    return this.dictionaryRepository.save(
      new DictionaryEntity(dictionaryDto.word, dictionaryDto.meaning),
    );
  }

  async getRandomWord(): Promise<DictionaryEntity> {
    const randomIndex = Math.floor(
      Math.random() * (await this.dictionaryRepository.count()),
    );

    return this.dictionaryRepository
      .createQueryBuilder('dictionary')
      .orderBy('random()')
      .skip(randomIndex)
      .getOne();
  }

  findByWord(word: string): Promise<DictionaryEntity> {
    return this.dictionaryRepository.findOneBy({ word: word });
  }

  update(dictionaryDto: DictionaryDto): Promise<UpdateResult> {
    return this.dictionaryRepository.update({
      word: dictionaryDto.word
    }, {
      word: dictionaryDto.word,
      meaning: dictionaryDto.meaning,
    });
  }
}
