import passport from 'passport'
import express from 'express'
import { SessionsController } from '../controller/sessions.controller.js'
const SessionsControllerRouting = new SessionsController()
export const sessionsRouter = express.Router()
sessionsRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }))

sessionsRouter.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), SessionsControllerRouting.redirectHome)

sessionsRouter.get('/current', SessionsControllerRouting.seeCurrentSession)
