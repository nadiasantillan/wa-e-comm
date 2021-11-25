import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeESAR from '@angular/common/locales/es-AR';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { NninputComponent } from './nninput/nninput.component';
import { WhoComponent } from './who/who.component';
import { HowtobuyComponent } from './howtobuy/howtobuy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

registerLocaleData(localeESAR);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    BannerComponent,
    CartComponent,
    NninputComponent,
    WhoComponent,
    HowtobuyComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es-ar'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
