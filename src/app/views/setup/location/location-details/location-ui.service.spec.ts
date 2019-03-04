import { TestBed } from '@angular/core/testing';

import { LocationUIService } from './location-ui.service';

describe('LocationUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationUIService = TestBed.get(LocationUIService);
    expect(service).toBeTruthy();
  });
});
