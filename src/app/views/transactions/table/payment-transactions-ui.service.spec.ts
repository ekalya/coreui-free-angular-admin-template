import { TestBed } from '@angular/core/testing';

import { PaymentTransactionsUIService } from './payment-transactions-ui.service';

describe('PaymentTransactionsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentTransactionsUIService = TestBed.get(PaymentTransactionsUIService);
    expect(service).toBeTruthy();
  });
});
