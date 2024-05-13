import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tutor } from './tutor'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  species: string

  @Column()
  carry: string

  @Column()
  weight: number

  @Column()
  date_of_birth: string

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor
}
