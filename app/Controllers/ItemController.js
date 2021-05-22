import { ProxyState } from "..//AppState.js"
import { itemService } from "..//Services/ItemService.js"

function drawMoney() {
  document.getElementById('money').innerText = ProxyState.money
}

function drawGoods() {
  let template = ''
  ProxyState.items.forEach(item => template += item.Template)
  document.getElementById('items').innerHTML = template
}

export default class ItemController {

  constructor() {
    //console.log("controller is linked");
    ProxyState.on('money', drawMoney)
    ProxyState.on('items', drawGoods)
    drawMoney()
    drawGoods()
  }

  addMoney() {
    //console.log("add money button worked");
    itemService.addMoney()
  }

  purchaseItem(itemName) {
    itemService.purchaseItem(itemName)
  }

}