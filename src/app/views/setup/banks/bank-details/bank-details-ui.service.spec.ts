import { TestBed } from '@angular/core/testing';

import { BankDetailsUIService } from './bank-details-ui.service';

describe('BankDetailsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankDetailsUIService = TestBed.get(BankDetailsUIService);
    expect(service).toBeTruthy();
  });
});
