import { TestBed } from '@angular/core/testing';

import { PositionUIService } from './position-ui.service';

describe('PositionUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionUIService = TestBed.get(PositionUIService);
    expect(service).toBeTruthy();
  });
});
