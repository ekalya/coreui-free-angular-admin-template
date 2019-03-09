import { TestBed } from '@angular/core/testing';

import { JobUIService } from './job-ui.service';

describe('JobUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobUIService = TestBed.get(JobUIService);
    expect(service).toBeTruthy();
  });
});
