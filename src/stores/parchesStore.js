import { makeObservable, observable, action, runInAction } from "mobx";

class PurchesesStore {
  addedProducts = [];
  isLoadingAddedProducts = false;

  constructor() {
    makeObservable(this, {
      addedProducts: observable.ref,
      isLoadingAddedProducts: observable.ref,

      setProductToBasket: action,
      removeProduct: action,
    });
  }

  // NOTE: add product to basket
  setProductToBasket = (product) => {
    runInAction(() => {
      this.addedProducts = [...this.addedProducts, product];
    });
  };

  // NOTE: remove product from basket
  removeProduct = (itemToRemove) => {
    this.addedProducts = this.addedProducts.filter(
      (product) => product.id !== itemToRemove
    );
  };
}
const goodsStore = new PurchesesStore();
export default goodsStore;
