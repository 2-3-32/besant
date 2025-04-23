import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { ContactComponent } from './routing/contact/contact.component';
import { PaymentComponent } from './routing/payment/payment.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];