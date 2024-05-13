import { AppDataSource } from '../data-source'
import { Pet } from '../entities/pet'
import { Request } from 'express'
import { Tutor } from '../entities/tutor'

export class PetController {
  private petRepository = AppDataSource.getRepository(Pet)
  private tutorsRepository = AppDataSource.getRepository(Tutor)

  async save(request: Request) {
    const { id, name, species, carry, date_of_birth, weight } = request.body;
    const tutorId = parseInt(request.params.tutorId);

    const tutor = await this.tutorsRepository.findOne({
      where: {
        id: tutorId,
      },
    });

    const pet = Object.assign(new Pet(), {
      id,
      name,
      carry,
      species,
      date_of_birth,
      weight,
    });

    pet.tutor = tutor;

    await this.tutorsRepository.save(tutor);

    return this.petRepository.save(pet);
  }
}
