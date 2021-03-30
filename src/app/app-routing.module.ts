import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ApprovedTransactionComponent } from './views/first-sprint/approved-transaction/approved-transaction.component';
import { OwnerInformationComponent } from './views/first-sprint/owner-information/owner-information.component';
import { CardPaymentComponent } from './views/first-sprint/payment-method/card-payment/card-payment.component';
import { PaymentMethodComponent } from './views/first-sprint/payment-method/payment-method.component';
import { ProductInformationComponent } from './views/first-sprint/product-information/product-information.component';

const routes: Routes = [
  {
    path: '',
    component: ProductInformationComponent
  },
  {
    path: 'owner-information',
    component:  OwnerInformationComponent
  },
  {
    path: 'payment',
    component: PaymentMethodComponent
  },
  {
    path: 'pse',
    component: PaymentMethodComponent
  },
  {
    path: 'card-payment',
    component: CardPaymentComponent
  },
  {
    path: 'approved-transaction',
    component: ApprovedTransactionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
