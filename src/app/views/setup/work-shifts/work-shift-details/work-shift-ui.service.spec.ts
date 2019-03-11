import { TestBed } from '@angular/core/testing';

import { WorkShiftUIService } from './work-shift-ui.service';

describe('WorkShiftUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkShiftUIService = TestBed.get(WorkShiftUIService);
    expect(service).toBeTruthy();
  });
});
