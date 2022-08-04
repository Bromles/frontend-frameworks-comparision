import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProductDetailsComponent} from "./product-list/product-details/product-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAlertsComponent} from "./product-list/product-alerts/product-alerts.component";
import {ProductsService} from "./product-list/products.service";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmationService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductDetailsComponent,
        ProductListComponent,
        ProductAlertsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ButtonModule,
        BrowserAnimationsModule,
        ConfirmPopupModule
    ],
    providers: [
        ProductsService,
        ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
