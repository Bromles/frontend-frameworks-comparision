import {Component, OnInit} from '@angular/core';
import {Product} from "../../Product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;

    constructor(private route: ActivatedRoute, private productService: ProductsService) {
    }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        // Find the product that correspond with the id provided in route.
        this.productService.products$.subscribe(products => {
            this.product = products.find(product => product.id === productIdFromRoute)
        })
    }
}
