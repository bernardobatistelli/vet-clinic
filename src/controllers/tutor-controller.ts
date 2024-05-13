import { AppDataSource } from '../data-source'
import { Tutor } from '../entities/tutor'
import { Request } from 'express'

export class TutorController {
  private tutorRepository = AppDataSource.getRepository(Tutor)

  async getAll() {
    return this.tutorRepository.find()
  }

  async getById(request: Request) {
    const id = parseInt(request.params.id)

    const user = await this.tutorRepository.findOne({ where: { id } })

    if (!user) {
      return 'User not found'
    }
    return user
  }
}
