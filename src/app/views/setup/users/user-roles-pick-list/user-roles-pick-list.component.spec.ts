import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPickListComponent } from './user-roles-pick-list.component';

describe('UserRolesPickListComponent', () => {
  let component: UserRolesPickListComponent;
  let fixture: ComponentFixture<UserRolesPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRolesPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolesPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
