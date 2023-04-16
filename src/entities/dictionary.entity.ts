import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dictionary' })
export class Dictionary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'word', nullable: false, type: 'varchar', length: 255 })
  word: string;

  @Column({ name: 'meaning', nullable: false, type: 'varchar', length: 255 })
  meaning: string;

  constructor(word: string, meaning: string) {
    this.word = word;
    this.meaning = meaning;
  }
}
