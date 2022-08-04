import {Injectable} from '@angular/core';
import {Product} from "../Product";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private _productsSubject = new BehaviorSubject<Product[]>([]);
    products$: Observable<Product[]> = this._productsSubject.asObservable();

    constructor(private httpClient: HttpClient) {
        this.fetchProducts();
    }

    fetchProducts() {
        return this.httpClient
            .get<Product[]>("assets/products.json")
            .subscribe(products => this._productsSubject.next(products));
    }
}
