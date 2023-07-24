import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import controllers from '@/app/controllers'

const RatingRouter = Router()

RatingRouter.get('/ratings/:id', controllers.RatingController.getRatingById)

RatingRouter.post('/ratings', controllers.RatingController.createRating)

RatingRouter.put('/ratings/:id', controllers.RatingController.updateRating)

RatingRouter.delete('/ratings/:id', controllers.RatingController.deleteRating)

RatingRouter.get('/ratings', controllers.RatingController.getRatings)

export default RatingRouter
