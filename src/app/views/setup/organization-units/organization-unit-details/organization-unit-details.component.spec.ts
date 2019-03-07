import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationUnitDetailsComponent } from './organization-unit-details.component';

describe('OrganizationUnitDetailsComponent', () => {
  let component: OrganizationUnitDetailsComponent;
  let fixture: ComponentFixture<OrganizationUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationUnitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
