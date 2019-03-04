import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnitTypesListComponent } from './org-unit-types-list.component';

describe('OrgUnitTypesListComponent', () => {
  let component: OrgUnitTypesListComponent;
  let fixture: ComponentFixture<OrgUnitTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgUnitTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
