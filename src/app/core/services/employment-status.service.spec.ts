import { TestBed } from '@angular/core/testing';

import { EmploymentStatusService } from './employment-status.service';

describe('EmploymentStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmploymentStatusService = TestBed.get(EmploymentStatusService);
    expect(service).toBeTruthy();
  });
});
