import { ChatManagerDBService } from '../services/chat.service.js'
const ChatManager = new ChatManagerDBService()
export class ChatController {
  async getMessages (req, res) {
    const { logged, user } = req.query
    const { data } = await ChatManager.getMessages()
    return res.render('chat', { logged, messages: data.reverse(), user })
  }
}
