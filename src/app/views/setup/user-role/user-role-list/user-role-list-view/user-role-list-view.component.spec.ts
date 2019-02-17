import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleListViewComponent } from './user-role-list-view.component';

describe('UserRoleListViewComponent', () => {
  let component: UserRoleListViewComponent;
  let fixture: ComponentFixture<UserRoleListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
