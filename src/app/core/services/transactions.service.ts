import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PaymentConfirmationService } from './payment-confirmation.service';
import { Observable } from 'rxjs';
import { PaymentConfirmationList } from '../models/payment-confirmation-list';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService  implements Resolve<any> {
  constructor(private paymentConfirmationService: PaymentConfirmationService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaymentConfirmationList> {
    return this.paymentConfirmationService.getAll();
  }
}
