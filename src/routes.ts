import { PetController } from './controllers/pet-controller'
import { TutorController } from './controllers/tutor-controller'

export const Routes = [
  {
    method: 'get',
    route: '/tutors',
    controller: TutorController,
    action: 'getAll',
  },
  {
    method: 'get',
    route: '/tutors/:id',
    controller: TutorController,
    action: 'getById',
  },
  {
    method: 'post',
    route: '/tutor',
    controller: TutorController,
    action: 'create',
  },
  {
    method: 'post',
    route: '/pet/:tutorId',
    controller: PetController,
    action: 'save',
  },
]
