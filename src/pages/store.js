import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
export const API_KEY = "7c3d3ca22aedc91e6c47fc43aecca7bb";
class ProductsStore {
  favoriteProducts = [];
  products = [];
  isLoading = false;
  isLoadingProducts = false;

  constructor() {
    makeObservable(this, {
      products: observable.ref,
      favoriteProducts: observable.ref,
      isLoading: observable.ref,
      isLoadingProducts: observable.ref,

      setFavoriteProducts: action,
      getProducts: action,
    });
  }
  //TEST request
  getProducts = () => {
    runInAction(() => {
      this.isLoadingProducts = true;
    });
    axios
      .get(`https://catfact.ninja/fact`)
      .then(({ data }) => {
        runInAction(() => {
          this.products = data;
          this.isLoadingProducts = false;
        });
      })
      .catch((error) => {
        error(error);
        runInAction(() => {
          this.isLoadingProducts = false;
        });
      });
  };
  // NOTE: add favorite product to products list
  setFavoriteProducts = (product) => {
    runInAction(() => {
      this.favoriteProducts = [...this.favoriteProducts, product];
    });
  };
}
const allProducts = new ProductsStore();
export default allProducts;
