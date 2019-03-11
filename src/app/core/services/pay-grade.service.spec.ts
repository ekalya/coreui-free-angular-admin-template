import { TestBed } from '@angular/core/testing';

import { PayGradeService } from './pay-grade.service';

describe('PayGradeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayGradeService = TestBed.get(PayGradeService);
    expect(service).toBeTruthy();
  });
});
