import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../Product";

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
    @Input() product!: Product;
    @Output() notify = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    onNotify(event: Event) {
        this.notify.emit(event);
    }
}
