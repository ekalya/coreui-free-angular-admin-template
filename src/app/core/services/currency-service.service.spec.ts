import { TestBed } from '@angular/core/testing';

import { CurrencyServiceService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyServiceService = TestBed.get(CurrencyServiceService);
    expect(service).toBeTruthy();
  });
});
