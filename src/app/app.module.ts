import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { ProductInformationComponent } from './views/first-sprint/product-information/product-information.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PaymentMethodComponent } from './views/first-sprint/payment-method/payment-method.component';
import { OwnerInformationComponent } from './views/first-sprint/owner-information/owner-information.component';
import { PaymentPseComponent } from './views/first-sprint/payment-method/payment-pse/payment-pse.component';
import { CardPaymentComponent } from './views/first-sprint/payment-method/card-payment/card-payment.component';
import { ApprovedTransactionComponent } from './views/first-sprint/approved-transaction/approved-transaction.component';
import { TitularDetailComponent } from './components/titular-detail/titular-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductInformationComponent,
    ProductDetailComponent,
    PaymentMethodComponent,
    OwnerInformationComponent,
    PaymentPseComponent,
    CardPaymentComponent,
    ApprovedTransactionComponent,
    TitularDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
