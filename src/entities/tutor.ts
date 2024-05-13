import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Pet } from './pet'

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  email: string

  @Column()
  date_of_birth: string

  @Column()
  zip_code: string

  @OneToMany((type) => Pet, (pet) => pet.tutor)
  pets: Pet[]
}
