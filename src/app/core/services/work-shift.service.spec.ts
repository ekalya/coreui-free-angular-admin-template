import { TestBed } from '@angular/core/testing';

import { WorkShiftService } from './work-shift.service';

describe('WorkShiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkShiftService = TestBed.get(WorkShiftService);
    expect(service).toBeTruthy();
  });
});
