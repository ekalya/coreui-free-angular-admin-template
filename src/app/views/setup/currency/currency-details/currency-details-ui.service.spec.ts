import { TestBed } from '@angular/core/testing';

import { CurrencyDetailsUIService } from './currency-details-ui.service';

describe('CurrencyDetailsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyDetailsUIService = TestBed.get(CurrencyDetailsUIService);
    expect(service).toBeTruthy();
  });
});
