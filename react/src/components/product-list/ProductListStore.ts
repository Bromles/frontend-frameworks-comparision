import {Product} from "../../model/Product";
import {action, makeAutoObservable} from "mobx";
import axios from "axios";

class ProductListStore {
    private _products: Product[] = [];

    constructor() {
        makeAutoObservable(this, {
            fetchProducts: action
        })
    }

    get products(): Product[] {
        return this._products;
    }

    async fetchProducts() {
        const res = await axios.get<Product[]>('products.json');
        this._products = res.data
    }
}

export default new ProductListStore();
