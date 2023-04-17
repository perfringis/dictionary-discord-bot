import { DictionaryEntity } from '../entities/dictionary.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
import DictionarySeeder from './seeds/dictionary.seeder';

(async () => {
  const options: DataSourceOptions = {
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [DictionaryEntity],
    synchronize: true,
  };

  const dataSource = new DataSource(options);
  await dataSource.initialize();

  runSeeders(dataSource, {
    seeds: [DictionarySeeder],
    factories: [],
  });
})();
