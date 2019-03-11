import { TestBed } from '@angular/core/testing';

import { PayGradeUIService } from './pay-grade-ui.service';

describe('PayGradeUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayGradeUIService = TestBed.get(PayGradeUIService);
    expect(service).toBeTruthy();
  });
});
