import cookies from "../utils/cookies";

export default class Cart {
  id = "cart";
  orderId = "";
  total = 0;
  currency = "USD";
  items = [];
  customer = {};
  metadata = {};

  constructor(id, options) {
    this.id = id || this.id;
    this.orderId = options.orderId || this.orderId;
    this.currency = options.currency || this.currency;

    let data = this.getStoredCart();
    if (data) {
      this.orderId = data.orderId || this.orderId;
      this.currency = data.currency || this.currency;
      this.items = data.items || this.items;
      this.customer = data.customer || this.customer;
      this.metadata = data.metadata || this.metadata;
    }
    this.updateCartData();
  }

  addItem({ productId, productSku, price, name, thumbnail }) {
    const id = this.createItemId();
    this.items.push({
      id,
      productId,
      productSku,
      price: parseInt(price),
      name,
      thumbnail
    });
    this.updateCartData();
  }

  checkItemIdAvailability(id) {
    const items = this.items.filter(item => item.id === id);
    if (items.length > 0) return false;
    return true;
  }

  createItemId() {
    const string = "abcdefghijklmnopqrstuvwxyz0123456789";
    let generated = "item_";
    for (let i = 0; i < 3; i++) {
      generated += string.charAt(Math.floor(Math.random() * string.length));
    }
    if (this.checkItemIdAvailability(generated)) {
      return generated;
    } else {
      return this.createItemId();
    }
  }

  getData() {
    return ({
      orderId: this.orderId,
      total: this.total,
      currency: this.currency,
      items: this.items,
      customer: this.customer,
      metadata: this.metadata
    });
  }

  getItem(id) {
    return this.items.filter(item => item.id === id)[0];
  }

  getItems() {
    return this.items;
  }

  getStoredCart() {
    try {
      return JSON.parse(atob(cookies.get(this.id)))
    } catch (err) {
      return null;
    }
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateCartData();
  }

  setOrderId(orderId) {
    this.orderId = orderId;
  }

  storeCart() {
    cookies.set(this.id, btoa(JSON.stringify(this.getData())));
  }

  updateCartData() {
    const reducer = (acc, cur) => acc + cur;
    this.total = this.items.reduce(reducer, 0);
    this.storeCart();
  }
}

let cart = {
  orderId: 12345,
  total: 135000,
  currency: "USD",
  items: [
    {
      productId: 12,
      productSku: "",
      price: 110000,
      name: "Product Name",
      thumbnail: "img.jpg"
    }
  ],
  customer: {
    firstName: "Miguel",
    lastName: "Villalobos",
    email: "bymavc@gmail.com",
    phone: "+573017497212",
    address: {
      line1: "Calle 135a",
      line2: "#10b-13",
      city: "Bogota",
      state: "Bogota D.C.",
      country: "Colombia",
      postalCode: "110121",
      note: "Apartment 3B"
    }
  },
  metadata: {
    paymentMethod: "Stripe",
    checkoutMode: "sandbox"
  },
}