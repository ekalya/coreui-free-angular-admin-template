import { TestBed } from '@angular/core/testing';

import { EmployeeUIService } from './employee-ui.service';

describe('EmployeeUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeUIService = TestBed.get(EmployeeUIService);
    expect(service).toBeTruthy();
  });
});
