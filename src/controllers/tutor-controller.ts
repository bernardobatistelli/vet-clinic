import { AppDataSource } from '../data-source'
import { Tutor } from '../entities/tutor'
import { Request } from 'express'

export class TutorController {
  private tutorRepository = AppDataSource.getRepository(Tutor)

  async getAll() {
    return await this.tutorRepository.find({
      relations: {
        pets: true
      }
    })
  }

  async getById(request: Request) {
    const id = parseInt(request.params.id)

    const user = await this.tutorRepository.findOne({ where: { id }, relations: {
      pets: true
    } })

    if (!user) {
      return 'User not found'
    }
    return user
  }

  async create(request: Request) {
    const tutor = this.tutorRepository.create(request.body)
    return this.tutorRepository.save(tutor)
  }

  async update(request: Request) {
    const { id, name, phone, email, date_of_birth, zip_code } = request.body;

    const tutor = Object.assign(new Tutor(), {
      id,
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
    });

    return await this.tutorRepository.save(tutor);
  }

  async delete (request: Request) {
    const id = parseInt(request.params.id)
    const tutor = await this.tutorRepository.findOne({ where: { id } })

    if (!tutor) {
      return 'Tutor not found'
    }

    await this.tutorRepository.delete(tutor)

    return 'Tutor deleted'
  }
}
