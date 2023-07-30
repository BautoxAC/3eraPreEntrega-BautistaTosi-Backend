import express from 'express'
import { MessageManagerDBService } from '../services/message.service.js'
export const chatRouter = express.Router()
const MessageManager = new MessageManagerDBService()
chatRouter.get('/', async (req, res) => {
  const { logged, user } = req.query
  const messages = await MessageManager.getMessages()
  return res.render('chat', { logged, messages: messages.reverse(), user })
})
