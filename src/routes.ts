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
]