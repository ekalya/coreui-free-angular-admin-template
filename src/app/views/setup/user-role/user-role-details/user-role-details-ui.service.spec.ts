import { TestBed } from '@angular/core/testing';

import { UserRoleDetailsUIService } from './user-role-details-ui.service';

describe('UserRoleDetailsUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRoleDetailsUIService = TestBed.get(UserRoleDetailsUIService);
    expect(service).toBeTruthy();
  });
});
