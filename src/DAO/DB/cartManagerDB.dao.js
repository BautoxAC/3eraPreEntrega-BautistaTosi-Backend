import { cartModel } from '../models/carts.model.js'
export class CartManagerDBDAO {
  async getCartById (id) {
    try {
      const cartFindId = await cartModel.findOne({ _id: id }).populate('products.idProduct').lean()
      return cartFindId
    } catch (e) {
      console.log(e)
      throw new Error('Failed to find the cart in DAO (check the data)')
    }
  }

  async addCart () {
    try {
      await cartModel.create({ products: [] })
      const lastAdded = await cartModel.findOne({}).sort({ _id: -1 }).lean()
      return lastAdded
    } catch (e) {
      console.log(e)
      throw new Error('Failed to add a cart in DAO (check the DB)')
    }
  }

  async addProduct (cart) {
    try {
      await cartModel.updateOne({ _id: cart._id }, cart)
      return cart
    } catch (e) {
      console.log(e)
      throw new Error('Failed to add a product to cart in DAO (check the data)')
    }
  }

  async deleteProduct (cartFindId) {
    try {
      await cartModel.updateOne({ _id: cartFindId._id }, cartFindId)
      return cartFindId
    } catch (e) {
      console.log(e)
      throw new Error('Failed to delete a cart in DAO (check the data)')
    }
  }

  async addNewProducts (cartFindId) {
    try {
      await cartModel.updateOne({ _id: cartFindId._id }, cartFindId)
      return cartFindId
    } catch (e) {
      console.log(e)
      throw new Error('Failed to add an array of products in DAO (check the data)')
    }
  }

  async deleteAllProducts (cartFindId) {
    try {
      await cartModel.updateOne({ _id: cartFindId._id }, cartFindId)
      return cartFindId
    } catch (e) {
      console.log(e)
      throw new Error('Failed to empty the cart in DAO (check the data)')
    }
  }

  async updateQuantityProduct (cartFindId) {
    try {
      await cartModel.updateOne({ _id: cartFindId._id }, cartFindId)
      return cartFindId
    } catch (e) {
      console.log(e)
      throw new Error('Failed to update the quantity of products in a cart in DAO (check the data)')
    }
  }
}
