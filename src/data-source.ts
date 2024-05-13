import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Pet } from './entities/pet'
import { Tutor } from './entities/tutor'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_URL,
  synchronize: true,
  logging: false,
  entities: [Pet, Tutor],
  migrations: [],
  subscribers: [],
})
