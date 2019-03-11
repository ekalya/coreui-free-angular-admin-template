import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentStatusListComponent } from './employment-status-list.component';

describe('EmploymentStatusListComponent', () => {
  let component: EmploymentStatusListComponent;
  let fixture: ComponentFixture<EmploymentStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
