import { TestBed } from '@angular/core/testing';

import { NationalityDetailsUIService } from './nationality-details-ui.service';

describe('NationalityDetailsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NationalityDetailsUIService = TestBed.get(NationalityDetailsUIService);
    expect(service).toBeTruthy();
  });
});
