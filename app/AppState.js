import Item from "./Models/Item.js"
import Value from "./Models/Value.js"
// import VendingMachine from "./Models/VendingMachine.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  money = 0

  items = [new Item("Mountain Dew", 2, 3, 'https://i.pinimg.com/474x/7d/6c/84/7d6c847d8a923f6f7707ae9a64539969--corn-chips-kettle-corn.jpg'), new Item("Dorrito", 1, 2, 'https://i.pinimg.com/474x/7d/6c/84/7d6c847d8a923f6f7707ae9a64539969--corn-chips-kettle-corn.jpg')]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
