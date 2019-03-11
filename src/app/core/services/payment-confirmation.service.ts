import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { PaymentConfirmation } from '../models/payment-confirmation';
import { PaymentConfirmationList } from '../models/payment-confirmation-list';
import { PaymentConfirmationPostReponse } from '../models/payment-confirmation-post-reponse';
import { PaymentConfirmationDailyTrans } from '../models/payment-confirmation-daily-trans';

@Injectable({
  providedIn: 'root'
})
export class PaymentConfirmationService {
  resource = '/paymentconfirmations/';
  constructor(private apiService: ApiService) { }
  create(paymentConfirmation: PaymentConfirmation): Observable<PaymentConfirmationPostReponse> {
    return this.apiService.put<PaymentConfirmationPostReponse>(this.resource, paymentConfirmation);
  }
  getAll(): Observable<PaymentConfirmationList> {
    return this.apiService.get<PaymentConfirmationList>(this.resource);
  }
  getDailyTransactionsCount(resourcePath: string): Observable<PaymentConfirmationDailyTrans> {
    return this.apiService.get<PaymentConfirmationDailyTrans>(this.resource + resourcePath);
  }
  getDailyTransactionTotals(resourcePath: string): Observable<PaymentConfirmationDailyTrans> {
    return this.apiService.get<PaymentConfirmationDailyTrans>(this.resource + resourcePath);
  }
  getById(id: number): Observable<PaymentConfirmation> {
    return this.apiService.get<PaymentConfirmation>(this.resource + id);
  }
  update(paymentConfirmation: PaymentConfirmation): Observable<PaymentConfirmation> {
    return this.apiService.post<PaymentConfirmation>(this.resource, paymentConfirmation);
  }
  delete(id: number) {
    this.apiService.delete(this.resource + id);
  }
}
