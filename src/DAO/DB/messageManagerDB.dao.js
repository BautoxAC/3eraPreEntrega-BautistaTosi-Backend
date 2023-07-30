import { messageModel } from '../models/messages.model.js'
export class MessageManagerDBDAO {
  async addMessage (message, userName) {
    try {
      await messageModel.create({ message, user: userName })
      const lastAdded = await messageModel.findOne({}).sort({ _id: -1 }).lean()
      return lastAdded
    } catch (e) {
      console.log(e)
      throw new Error('Failed to create a message in DAO (check the data)')
    }
  }

  async getMessages () {
    try {
      const messages = await messageModel.find({}).lean()
      return messages
    } catch (e) {
      console.log(e)
      throw new Error('Failed to get the messages')
    }
  }
}
