import { TestBed } from '@angular/core/testing';

import { OrganizationUnitUIService } from './organization-unit-ui.service';

describe('OrganizationUnitUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationUnitUIService = TestBed.get(OrganizationUnitUIService);
    expect(service).toBeTruthy();
  });
});
