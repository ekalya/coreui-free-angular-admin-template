import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAuthorityPickListComponent } from './role-authority-pick-list.component';

describe('RoleAuthorityPickListComponent', () => {
  let component: RoleAuthorityPickListComponent;
  let fixture: ComponentFixture<RoleAuthorityPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAuthorityPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAuthorityPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
