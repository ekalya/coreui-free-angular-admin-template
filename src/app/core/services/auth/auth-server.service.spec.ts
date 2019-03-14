import { TestBed } from '@angular/core/testing';

import { AuthServerService } from './auth-server.service';

describe('AuthServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServerService = TestBed.get(AuthServerService);
    expect(service).toBeTruthy();
  });
});
