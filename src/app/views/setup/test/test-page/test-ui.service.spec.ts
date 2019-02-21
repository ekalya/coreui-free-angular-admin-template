import { TestBed } from '@angular/core/testing';

import { TestUIService } from './test-ui.service';

describe('TestUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestUIService = TestBed.get(TestUIService);
    expect(service).toBeTruthy();
  });
});
