import { TestBed } from '@angular/core/testing';

import { EmploymentStatusUIService } from './employment-status-ui.service';

describe('EmploymentStatusUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmploymentStatusUIService = TestBed.get(EmploymentStatusUIService);
    expect(service).toBeTruthy();
  });
});
