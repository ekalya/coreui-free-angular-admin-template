import { TestBed } from '@angular/core/testing';

import { StateStorageService } from './state-storage.service';

describe('StateStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateStorageService = TestBed.get(StateStorageService);
    expect(service).toBeTruthy();
  });
});
