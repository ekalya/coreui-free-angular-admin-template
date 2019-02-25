import { TestBed } from '@angular/core/testing';

import { BankBranchDetailsUIService } from './bank-branch-details-ui.service';

describe('BankBranchDetailsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankBranchDetailsUIService = TestBed.get(BankBranchDetailsUIService);
    expect(service).toBeTruthy();
  });
});
