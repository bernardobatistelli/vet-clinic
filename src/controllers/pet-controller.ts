import { AppDataSource } from '../data-source'
import { Pet } from '../entities/pet'
import { Request, Response } from 'express'
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

  async update(request: Request) {
    const { id, name, species, carry, date_of_birth, weight } = request.body;
    const tutorId = parseInt(request.params.tutorId);
    const petId = parseInt(request.params.petId)

    const tutor = await this.tutorsRepository.findOne({
      where: {
        id: tutorId,
      },
    });

    const pet = await this.petRepository.findOne({
      where: {
        id: petId,
      },
    })

    if (!pet) {
      return "pet não encontrado";
    }

    pet.id = id
    pet.name = name
    pet.species = species
    pet.carry = carry
    pet.date_of_birth = date_of_birth
    pet.weight = weight

    await this.tutorsRepository.save(tutor)

    return await this.petRepository.save(pet)
  }

  async delete (request: Request, response: Response) {
    const tutorId = parseInt(request.params.tutorId);
    const petId = parseInt(request.params.petId);

    const tutor = await this.tutorsRepository.findOne({
      where: {
        id: tutorId,
      },
    });

    const pet = await this.petRepository.findOne({
      where: {
        id: petId,
      },
    });

    if (!pet) {
      return "Pet não encontrado"
    }

    await this.petRepository.delete(pet);

    return "Pet deletado";
}}
