import {Component, OnInit} from '@angular/core';
import {Product} from "../Product";
import {ProductsService} from "./products.service";
import {ConfirmationService} from "primeng/api";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];

    constructor(private productService: ProductsService, private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
        this.productService.products$.subscribe(products => this.products = products);
    }

    share(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'The product has been shared successfully',
            rejectVisible: false,
        })
    }

    onNotify(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'You will be notified when the product goes on sale',
            rejectVisible: false,
        })
    }
}
