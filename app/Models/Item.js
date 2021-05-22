export default class Item {
  constructor(itemName, itemCost, itemQuantity, img) {
    this.itemName = itemName
    this.itemCost = itemCost
    this.itemQuantity = itemQuantity
    this.img = img
  }

  get Template() {

    return /*html*/`
    <div class="card" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="Item Pic">
    <div class="card-body">
      <h5 class="card-title">${this.itemName}</h5>
      <p class="card-text">Price: ${this.itemCost}</p>
      <p class="card-text">Quantity: ${this.itemQuantity}</p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
  `
  }
}
