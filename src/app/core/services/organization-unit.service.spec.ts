import { TestBed } from '@angular/core/testing';

import { OrganizationUnitService } from './organization-unit.service';

describe('OrganizationUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationUnitService = TestBed.get(OrganizationUnitService);
    expect(service).toBeTruthy();
  });
});
