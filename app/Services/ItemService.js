import { ProxyState } from "../AppState.js";


class ItemService {

  constructor() {
    //console.log('service is linked');
  }

  addMoney() {
    ProxyState.money += 1
    console.log(ProxyState.money);
  }

  purchaseItem(name) {
    let foundItem = ProxyState.items.find(i => i.itemName == name)
    console.log(foundItem);
    if (ProxyState.money >= foundItem.itemCost && foundItem.quantity > 0) {
      ProxyState.money -= foundItem.price
      foundItem.quantity--
      ProxyState.items = ProxyState.items
    } else {
      window.alert("You have no money")
    }
  }

}


export const itemService = new ItemService()