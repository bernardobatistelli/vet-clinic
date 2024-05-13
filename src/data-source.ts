import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Pet } from './entities/pet'
import { Tutor } from './entities/tutor'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Pet, Tutor],
  migrations: [],
  subscribers: [],
})
