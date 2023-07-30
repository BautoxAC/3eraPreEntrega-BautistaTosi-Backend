import { newMessage } from '../utils.js'
import { MessageManagerDBDAO } from '../DAO/DB/messageManagerDB.dao.js'
import { UserManagerDBDAO } from '../DAO/DB/userManagerDB.dao.js'
const UserManagerDB = new UserManagerDBDAO()
const MessageManagerDB = new MessageManagerDBDAO()
export class MessageManagerDBService {
  async addMessage (message, userName) {
    try {
      const user = await UserManagerDB.getUserByUserName(userName)
      if (user) {
        const lastAdded = await MessageManagerDB.addMessage(message, userName)
        return newMessage('success', 'Message added successfully', lastAdded)
      } else {
        return newMessage('failure', 'The user was not foud', '')
      }
    } catch (e) {
      console.log(e)
      return newMessage('failure', 'an error ocurred', e)
    }
  }

  async getMessages () {
    try {
      const messages = await MessageManagerDB.getMessages()
      return newMessage('success', 'Messages got', messages)
    } catch (e) {
      console.log(e)
      return newMessage('failure', 'Messages not found', e)
    }
  }
}
