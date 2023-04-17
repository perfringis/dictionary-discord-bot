import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DictionaryEntity } from '../../entities/dictionary.entity';

export default class DictionarySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(DictionaryEntity);
    await repository.insert([
      {
        word: 'hacek',
        meaning: 'Pewien projekt w mordowni.',
      },
      {
        word: 'larin',
        meaning:
          'Niemiec o blond wlosach wspasujacy sie w aryjskie wymagania pewnego austryjackiego malarza.',
      },
      {
        word: 'lejba',
        meaning: 'Label.',
      },
      {
        word: 'kept',
        meaning: '(?)',
      },
      {
        word: 'dżamle',
        meaning: 'Format plikow YML/YAML.',
      },
      {
        word: 'do hexy',
        meaning:
          'HEX - Pub/Kawiarnia z grami planszowymi. Isc do hexy isc do tego Pubu/Kawiarni.',
      },
      {
        word: 'ja pi toole',
        meaning:
          'Dwuznaczne pojecie oznaczajace ja piernicze!/ja pieprze! oraz system raportowania czasu w mordowni.',
      },
      {
        word: 'dejtaset',
        meaning: 'Po angielsku dataset. Po polsku zbior danych.',
      },
      {
        word: 'mark schwarz',
        meaning: '(?)',
      },
      {
        word: 'zugu',
        meaning: '(?) - Pewnie chodzi o java zulu',
      },
      {
        word: 'dżasuo',
        meaning: 'Yasuo - postac z gry League of Legends.',
      },
      {
        word: 'dzipik',
        meaning: 'Pewien projekt w mordowni.',
      },
      {
        word: 'sacz/e',
        meaning: 'Po niemiecku suche. Po Polsku szukac.',
      },
      {
        word: 'dragon',
        meaning: 'Pewien projekt w mordowni.',
      },
      {
        word: 'malafit',
        meaning: 'Malphite - postac z gry League of Legends.',
      },
      {
        word: 'leperuch',
        meaning: 'Leprechaun - postac z gry planszowej Talisman.',
      },
      {
        word: 'frankentaur',
        meaning: 'Frankenthal - miasto w niemczech.',
      },
      {
        word: 'miesiący',
        meaning:
          'Po Polsku miesięcy. Przykładowe użycie: Kilka miesiący waliłem wódke.',
      },
      {
        word: 'weszedłem',
        meaning:
          'Po Polsku wszedłem. Przykładowe użycie: Nie weszedłem drugi raz do tej samej rzeki.',
      },
      {
        word: 'rozłenczam (się)',
        meaning:
          'Po Polsku rozłączam (się). Przykładowe użycie: Rozłenczam (się). Do później.',
      },
      {
        word: 'chara',
        meaning: 'Chodzi o varchar. Typ tesktowy wystepujacy w bazach SQL.',
      },
      {
        word: 'gites majeranek',
        meaning:
          'Po Polsku wszystko będzie dobrze. Inaczej wszytko będzie spoko/git.',
      },
      {
        word: 'słowiem',
        meaning: 'Po Polsku słowem.',
      },
      {
        word: 'kredki = karetki',
        meaning: '(?)',
      },
      {
        word: 'zanullowane',
        meaning: `Inaczej wszystko zostało wypełnione null'mi np. w programie komputerowym.`,
      },
      {
        word: 'chadzia',
        meaning: `Po Polsku chodzi. Przykładowe użycie: Ale to chadzia!`,
      },
      {
        word: 'gorylarz',
        meaning: `(?)`,
      },
      {
        word: 'łiczałt',
        meaning: `Po angielsku without. Po polsku bez.`,
      },
      {
        word: 'ichsze',
        meaning: `(?)`,
      },
      {
        word: 'dołland',
        meaning: `Po angielsku download. Po polsku pobieranie.`,
      },
      {
        word: 'picza',
        meaning: `Chodzi o sytem do raportowania czasu w mordowni.`,
      },
      {
        word: 'grzyby na maszt',
        meaning: `Inaczej la' manche. (?)`,
      },
    ]);
  }
}
